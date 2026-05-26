import React from "react";

const FooterSection = () => {
  return (
    <footer className="py-10 px-6 bg-slate-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-blue-900 font-bold text-xl mb-5">Contact Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>0477123456</li>
            <li className="break-word">plumbing@gmail.com</li>
            <li>2 Blaxcell road, Granville NSW 2142, Australia</li>
          </ul>
        </div>

        <div>
          <h2 className="text-blue-900 font-bold text-xl mb-5">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Blocked Drains</li>
            <li>Burst Pipes</li>
            <li>Hot Water</li>
            <li>Heat Pupms</li>
            <li>Toilet Repairs</li>
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
