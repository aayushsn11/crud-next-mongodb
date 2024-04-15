"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const router = useRouter();
  const defaultForm = {
    newTitle: title,
    newDescription: description,
  };
  const [form, setForm] = useState(defaultForm);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const newTitle = form.newTitle;
    const newDescription = form.newDescription;
    debugger;
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/josn",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      debugger;
      if (!res.ok) {
        throw new Error("Failed to update topic");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
        type="text"
        name="newTitle"
        value={form.newTitle}
        onChange={handleChange}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        type="text"
        name="newDescription"
        value={form.newDescription}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}
