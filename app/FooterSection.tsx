import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterSection = () => {
  return (
    <footer className="py-10 px-6 bg-slate-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-blue-900 font-bold text-xl mb-5">Contact Us</h2>
          <ul className="space-y-2">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-black text-md shrink-0" />
              <li>0477123456</li>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="text-black text-md shrink-0" />
              <li className="break-word">plumbing@gmail.com</li>
            </div>
            <div className="flex items-start gap-1">
              <FaLocationDot className="text-black text-md shrink-0 mt-1" />
              <li>2 Blaxcell road, Granville NSW 2142, Australia</li>
            </div>
          </ul>
        </div>

        <div>
          <h2 className="text-blue-900 font-bold text-xl mb-5">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <Link href="/Services#BD">
              <li className="mb-2">Blocked Drains</li>
            </Link>
            <Link href="/Services#BP">
              <li className="mb-2">Burst Pipes</li>
            </Link>
            <Link href="/Services#HW">
              <li className="mb-2">Hot Water</li>
            </Link>
            <Link href="/Services#HP">
              <li className="mb-2">Heat Pupms</li>
            </Link>
            <Link href="/Services#TR">
              <li className="mb-2">Toilet Repairs</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-900 font-bold text-xl mb-5">
            Areas We Cover
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Parramatta</li>
            <li>Carlingford</li>
            <li>Pennant hills</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
