import React from "react";
import { Container, Flex, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import QuoteButton from "./components/QuoteButton";

const NavBar = () => {
  return (
    <nav className="bg-emerald-950 text-white text-xl font-sans">
      <Container className="p-3">
        <Flex justify="between" align="center" gap="1">
          <Link href="/" className="mr-3">
            Logo
          </Link>
          <Flex>
            <ul className="flex space-x-20">
              <li>
                <Link href="/About">About us</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/Contact">Contact us</Link>
              </li>
            </ul>
          </Flex>
          <Flex align="center" gap="5">
            <QuoteButton/>
            <button className="btn btn-info btn-lg rounded-full">
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
