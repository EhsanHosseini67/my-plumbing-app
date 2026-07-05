import { Metadata } from "next";
import QuoteRequestTemplate from "../components/QuoteRequestTemplate";

const QuoteForm = () => {
  return <QuoteRequestTemplate />;
};

export default QuoteForm;

export const metadata: Metadata = {
  title: "Quote",
  description: "Get a quote about your business",
};
