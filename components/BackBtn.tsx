"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="hover:bg-text-main/10 hover:dark:bg-x-border-light/10 rounded-full p-2 cursor-pointer text-xl"
    >
      <FaArrowLeft />
    </button>
  );
}
