"use client";

import { Metadata } from "next";
import { useState } from "react";

const QuoteRequestTemplate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    if (response.ok) {
      alert("Your quote request has been sent.");
    } else {
      alert("Failed to send your request.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-20 sm:px-8 lg:px-20">
        <label
          htmlFor="name"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Name:
        </label>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            className="w-full
            max-w-2xl
            h-11
            border
            border-gray-300
            rounded-md
            px-4
            transition
            duration-200
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            "
          />
        </div>

        <label
          htmlFor="email"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Email:
        </label>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full
            max-w-2xl
            h-11
            border
            border-gray-300
            rounded-md
            px-4
            transition
            duration-200
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20"
          />
        </div>

        <label
          htmlFor="phone"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Phone Number:
        </label>
        <div className="mb-5">
          <input
            type="tel"
            name="phone"
            className="w-full
            max-w-2xl
            h-11
            border
            border-gray-300
            rounded-md
            px-4
            transition
            duration-200
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20"
          />
        </div>

        <label
          htmlFor="city"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          City/Suburb:
        </label>
        <div className="mb-5">
          <input
            type="text"
            name="city"
            id="city"
            className="w-full
            max-w-2xl
            h-11
            border
            border-gray-300
            rounded-md
            px-4
            transition
            duration-200
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20"
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Message:
        </label>
        <div className="mb-5">
          <textarea
            name="message"
            placeholder="Type something..."
            className="w-full
            max-w-2xl
            min-h-[160px]
            border
            border-gray-300
            rounded-md
            p-4
            resize-none
            transition
            duration-200
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className=" btn
        btn-primary
        w-full
        sm:w-auto
        px-8
        text-base
        sm:text-lg
        mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuoteRequestTemplate;