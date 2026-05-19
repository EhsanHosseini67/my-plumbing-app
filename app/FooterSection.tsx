import React from "react";

const FooterSection = () => {
  return (
    <footer className="flex p-10 justify-around bg-slate-300">
      <div>
        <h2 className="text-blue-900 font-bold text-xl mb-5">Contact Us</h2>
        <ul className="list-disc pl-6 max-w-3xs">
          <li>0477123456</li>
          <li>plumbing@gmail.com</li>
          <li>2 Blaxcell road, Granville NSW 2142, Australia</li>
        </ul>
      </div>
      <div>
        <h2 className="text-blue-900 font-bold text-xl mb-5">Our Services</h2>
        <ul className="list-disc pl-6">
          <li>Blocked Drains</li>
          <li>Burst Pipes</li>
          <li>Hot Water</li>
          <li>Heat Pupms</li>
          <li>Toilet Repairs</li>
        </ul>
      </div>
      <div>
        <h2 className="text-blue-900 font-bold text-xl mb-5">Areas We Cover</h2>
        <ul className="list-disc pl-6">
          <li>Parramatta</li>
          <li>Carlingford</li>
          <li>Pennant hills</li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
