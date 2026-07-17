"use client";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneButton = () => {
  const router = useRouter();
  return (
    <button
      className="btn bg-emerald-600 btn-lg rounded-full text-white hover:bg-white hover:text-emerald-600"
      onClick={() => router.push("/FAQ#Contact")}
    >
     <FaPhoneAlt />
                0477123456
    </button>
  );
};

export default PhoneButton;