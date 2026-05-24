"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

const FaqItems = [
  {
    question: "Are we fully insured?",
    answer:
      "Yes, we have a comprehensive insurance certificate and can guarantee any damage caused to your property during the job.",
  },
  {
    question: "Do we offer emergency service?",
    answer: "Yes, we provide 24/7 emergency plumbing services.",
  },
  {
    question: "Do we provide free quotes?",
    answer: "Yes, we offer free quotes for all plumbing jobs.",
  },
  {
    question: "Do we provide free quotes?",
    answer: "Yes, we offer free quotes for all plumbing jobs.",
  },
  {
    question: "Do we provide free quotes?",
    answer: "Yes, we offer free quotes for all plumbing jobs.",
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
        <div key={index} className="flex justify-between gap-5 border-b pb-5">
          <div>
            <h2>{item.question}</h2>

            {expanded === index && (
              <p className="mt-2 leading-7">{item.answer}</p>
            )}
          </div>

          <button onClick={() => toggleItem(index)}>
            {expanded === index ? <TiMinus className="text-xl"/> : <TiPlus className="text-xl" />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;
