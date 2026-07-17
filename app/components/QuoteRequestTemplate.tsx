"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  city: z.string().min(3, { message: "Please enter your city/suburb." }),
  message: z
    .string()
    .min(10, { message: "Please enter at least 10 characters." }),
});

type FormData = z.infer<typeof schema>;

const QuoteRequestTemplate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    shouldFocusError: false,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setNotification({
          show: true,
          message: "Your quote request has been sent.",
          type: "success",
        });

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setNotification({
          show: true,
          message: "Failed to send your request.",
          type: "error",
        });
      }
    } catch {
      setNotification({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="px-4 py-20 sm:px-8 lg:px-20">
        <label
          htmlFor="name"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Name:
        </label>
        <div className="mb-5">
          <input
            {...register("name")}
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
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <label
          htmlFor="email"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Email:
        </label>
        <div className="mb-5">
          <input
            {...register("email")}
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
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <label
          htmlFor="phone"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Phone Number:
        </label>
        <div className="mb-5">
          <input
            {...register("phone")}
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
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <label
          htmlFor="city"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          City/Suburb:
        </label>
        <div className="mb-5">
          <input
            {...register("city")}
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
          {errors.city && <p className="text-red-600">{errors.city.message}</p>}
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm sm:text-base font-medium"
        >
          Message:
        </label>
        <div className="mb-5">
          <textarea
            {...register("message")}
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
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}
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
          {isSubmitting && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          Submit
        </button>
        {notification.show && (
  <dialog open className="modal">
    <div className="modal-box">
      <h3 className="text-white font-bold text-lg">
        {notification.type === "success" ? "Success" : "Error"}
      </h3>

      <p className="text-white py-4">
        {notification.message}
      </p>

      <div className="modal-action">
        <button
          className="btn"
          onClick={() =>
            setNotification({
              show: false,
              message: "",
              type: "success",
            })
          }
        >
          Close
        </button>
      </div>
    </div>
  </dialog>
)}
      </div>
    </form>
  );
};

export default QuoteRequestTemplate;
