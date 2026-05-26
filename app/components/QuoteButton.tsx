"use client";
import { useRouter } from "next/navigation";
import React from "react";

const QuoteButton = () => {
  const router = useRouter();
  return (
    <button
      className="btn bg-emerald-600 btn-lg rounded-full text-white hover:bg-white hover:text-emerald-600"
      onClick={() => router.push("/Quote")}
    >
      Get A Quote
    </button>
  );
};

export default QuoteButton;
