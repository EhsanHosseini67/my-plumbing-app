"use client";
import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

const FaqItems = [
  {
    question: "Are we fully insured?",
    answer:
      "Yes, we are fully insured for all residential and commercial plumbing services, ensuring safe, reliable workmanship and complete customer protection.",
  },
  {
    question: "Do we offer emergency service?",
    answer:
      "Yes, we offer 24/7 emergency plumbing services for urgent issues including burst pipes, blocked drains, and hot water system breakdowns, ensuring fast response and reliable repairs.",
  },
  {
    question: "Do we provide free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all residential and commercial plumbing services, ensuring transparent pricing and clear communication from the start.",
  },
  {
    question: "How much do plumbing services cost?",
    answer:
      "The cost of plumbing services varies depending on the type of work required, such as blocked drains, burst pipes, or hot water repairs. We provide upfront, transparent pricing for all residential and commercial plumbing services so you always know what to expect before we begin.",
  },
  {
    question: "Do you do small plumbing jobs?",
    answer:
      "Yes, we provide plumbing services for jobs of all sizes, including small repairs such as leaking taps, blocked sinks, and toilet issues, as well as larger plumbing work for homes and businesses.",
  },
];

const ExpandableList = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="mt-10">
      {FaqItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start gap-5 border-b py-5"
        >
          <div>
            <h2>{item.question}</h2>

            {expanded === index && (
              <p className="mt-2 leading-7">{item.answer}</p>
            )}
          </div>

          <button
            onClick={() => toggleItem(index)}
            className="w-10 h-10 flex items-center justify-center shrink-0 self-start rounded-full hover:bg-gray-100 transition"
          >
            {expanded === index ? (
              <TiMinus className="text-xl" />
            ) : (
              <TiPlus className="text-xl" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;
