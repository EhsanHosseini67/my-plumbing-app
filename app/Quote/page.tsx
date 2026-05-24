import Form from "next/form";

const QuoteForm = () => {
  return (
    <Form action="/search">
      <div className="p-20">
        <label className="mr-5">Name:</label>
        <div className="mb-5 mt-1 w-xl">
          <input
            type="text"
            name="name"
            id="name"
            className="w-xl h-10 border
            focus:outline-none
            focus:border-primary
            "
          />
        </div>

        <label>Email:</label>
        <div className="mb-5 mt-1 w-xl ">
          <input
            type="email"
            name="email"
            id="email"
            className="w-xl h-10 border
            focus:outline-none
            focus:border-primary"
          />
        </div>

        <label>Phone Number:</label>
        <div className="mb-5 mt-1 w-xl ">
          <input
            type="number"
            name="phone"
            id="phone"
            className="w-xl h-10 border
            focus:outline-none
            focus:border-primary"
          />
        </div>

        <label>City/Suburb:</label>
        <div className="mb-5 mt-1 w-xl ">
          <input
            type="text"
            name="city"
            id="city"
            className="w-xl h-10 border
            focus:outline-none
            focus:border-primary"
          />
        </div>

        <label>Message:</label>
        <div className="mb-5 mt-1 w-xl">
          <textarea
            placeholder="Type something..."
            className="w-xl h-40 p-2 border
            focus:outline-none
            focus:border-primary"
          />
        </div>

        <button type="submit" className="btn btn-primary my-10 text-lg">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default QuoteForm;
