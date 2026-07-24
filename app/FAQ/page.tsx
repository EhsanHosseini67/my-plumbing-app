import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ExpandableList from "../components/ExpandableList";

const Faq = () => {
  return (
    <Container className="section-container py-16 lg:py-20 lg:pt-20 pt-2">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">FAQ</h1>

      <div className="mt-10">
        <ExpandableList />
      </div>

      <div className="mt-16 lg:mt-20" id="Contact">
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
        <div className="mt-8 md:w-[600px] h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.071748574976!2d151.00847787598417!3d-33.83626027323916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a32d7431613b%3A0x4ed2381496451fb5!2s2%20Blaxcell%20St%2C%20Granville%20NSW%202142!5e0!3m2!1sen!2sau!4v1783151637117!5m2!1sen!2sau"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mt-4 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Faq;

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our business",
};
