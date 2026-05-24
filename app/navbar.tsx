import React from "react";
import { Container, Flex, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import QuoteButton from "./components/QuoteButton";
import ThemeToggler from "./components/ThemeToggler";

const NavBar = () => {
  return (
    <nav className="bg-emerald-950 text-white text-xl font-sans sticky top-0 z-50">
      <Container className="p-3">
        <Flex justify="between" align="center" gap="9">
          <Link href="/" className="mr-0">
            Logo
          </Link>
          <Flex>
            <ul className="flex justify-around w-2xl">
              <li>
                <Link href="/About">About us</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/FAQ">FAQ</Link>
              </li>
            </ul>
          </Flex>
          <Flex align="center" gap="5">
            <QuoteButton />
            <button className="btn  bg-emerald-600 btn-lg rounded-full">
              <FaPhone />
              0477123456
            </button>
           
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
