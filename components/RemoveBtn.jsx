"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    if (!id) return;
    try {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <button className="text-red-400" onClick={handleDelete}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
