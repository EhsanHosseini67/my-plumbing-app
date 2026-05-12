"use client";
import { useRouter } from "next/navigation";
import React from "react";

const QuoteButton = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-info btn-lg rounded-full"
      onClick={() => router.push('/Quote')}
    >
      Get A Quote
    </button>
  );
};

export default QuoteButton;
