import Form from "next/form";

export default function QuoteForm() {
  return (
    <Form action="/search">
      <label>Full Name:</label>
      <input type="text" name="full name" id="name" />
      <label>Email:</label>
      <input type="email" name="email" id="email" />
      <label>Phone Number:</label>
      <input type="number" name="phone" id="phone" />
      <label>City/Suburb:</label>
      <input type="text" name="city" id="city" />
      <button type="submit">Submit</button>
    </Form>
  );
}
