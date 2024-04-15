"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const defaultForm = {
    title: "",
    description: "",
  };
  const [form, setForm] = useState(defaultForm);
  const router = useRouter();

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description) {
      alert("title and description required");
      return;
    }
    const title = form.title;
    const description = form.description;
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
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
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
