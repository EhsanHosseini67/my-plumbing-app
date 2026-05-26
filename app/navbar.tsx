"use client";
import React, { useState } from "react";
import { Container, Flex, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import QuoteButton from "./components/QuoteButton";
import ThemeToggler from "./components/ThemeToggler";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-950 text-white sticky top-0 z-50 shadow-md">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Logo
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10 text-xl">
              <li>
                <Link
                  href="/About"
                  className="hover:text-emerald-300 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/Services"
                  className="hover:text-emerald-300 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link href="/FAQ" className="hover:text-emerald-300 transition">
                  FAQ
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <QuoteButton />

              <button className="btn bg-emerald-600 hover:bg-white hover:text-emerald-600 btn-lg border-none rounded-full text-white">
                <FaPhone />
                0477123456
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6">
            <ul className="flex flex-col gap-5 text-lg mb-6">
              <li>
                <Link href="/About">About Us</Link>
              </li>

              <li>
                <Link href="/Services">Services</Link>
              </li>

              <li>
                <Link href="/FAQ">FAQ</Link>
              </li>
            </ul>

            <div className="flex flex-col gap-4">
              <QuoteButton />

              <button className="btn bg-emerald-600 border-none text-lg rounded-full text-white w-full">
                <FaPhone />
                0477123456
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
