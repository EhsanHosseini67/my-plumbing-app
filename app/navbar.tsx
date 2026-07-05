"use client";
import React, { useState, useEffect } from "react";
import { Container, Flex, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import QuoteButton from "./components/QuoteButton";
import ThemeToggler from "./components/ThemeToggler";
import PhoneButton from "./components/PhoneButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-emerald-950 text-white fixed top-0 left-0 w-full z-50 shadow-md transition-transform
    duration-300
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl tracking-wide">
            Home
          </Link>

          <div className="hidden lg:flex items-center gap-20">
            <ul className="flex items-center gap-20 text-xl">
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

              <PhoneButton/>
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

              <PhoneButton/>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
