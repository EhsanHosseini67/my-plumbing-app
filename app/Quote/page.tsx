import Form from "next/form";

const QuoteForm = () => {
  return (
    <Form action="/search">
      <div className="p-20">
        <label className="mr-5">Name:</label>
        <div className="mb-5 mt-1">
          <input type="text" name="name" id="name" />
        </div>

        <label>Email:</label>
        <div className="mb-5 mt-1">
          <input type="email" name="email" id="email" />
        </div>

        <label>Phone Number:</label>
        <div className="mb-5 mt-1">
          <input type="number" name="phone" id="phone" />
        </div>

        <label>City/Suburb:</label>
        <div className="mb-5 mt-1">
          <input type="text" name="city" id="city" />
        </div>

        <label>Message:</label>
        <div className="mb-5 mt-1">
          <textarea placeholder="Type something..." className="w-lg"/>
        </div>

        <button type="submit" className="btn btn-primary my-5">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default QuoteForm;
