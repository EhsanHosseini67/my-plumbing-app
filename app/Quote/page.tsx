import { Metadata } from "next";
import Form from "next/form";

const QuoteForm = () => {
  return (
    <Form action="/search">
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
            type="number"
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
    </Form>
  );
};

export default QuoteForm;

export const metadata: Metadata = {
  title: 'Quote',
  description: 'Get a quote about your business',
}