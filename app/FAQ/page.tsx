import { Container } from "@radix-ui/themes";
import React from "react";
import ExpandableList from "../components/ExpandableList";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Metadata } from "next";

const Faq = () => {
  return (
    <Container className="section-container py-16 lg:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">FAQ</h1>

      <div className="mt-10">
        <ExpandableList />
      </div>

      <div className="mt-16 lg:mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h1>

        <div className="space-y-5 mt-10">
          <div className="flex items-start gap-3">
            <FaLocationDot className="text-red-600 text-xl shrink-0 mt-1" />

            <p className="text-base sm:text-lg break-words">
              2 Blaxcell Road, Granville NSW 2142, Australia
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-red-600 text-xl shrink-0" />

            <p className="text-base sm:text-lg">0477 123 456</p>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className="text-red-600 text-xl shrink-0" />

            <p className="text-base sm:text-lg break-all">plumbing@gmail.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Faq;

export const metadata: Metadata = {
  title: 'Faq',
  description: 'Frequently asked questions about our business',
}