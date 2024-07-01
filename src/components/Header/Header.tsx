"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="py-4 px-5 max-w-wrapper mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image width={37} height={40} src="/logo.svg" alt="Earth fast logo" />
        <h1 className="font-bold text-lg sm:text-2xl text-">EarthFast</h1>
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="/page1" className="text-title-light dark:text-title-dark">
          Solution
        </Link>
        <Link href="/page2" className="text-title-light dark:text-title-dark">
          Resource
        </Link>
        <Link href="/page3" className="text-title-light dark:text-title-dark">
          Company
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Button href="/" variant="text">
          Login
        </Button>
        <Button href="/" variant="inverted" className="py-[0.625rem]">
          Get Started
        </Button>
      </div>
      <button
        className="sm:hidden text-gray-900 dark:text-white focus:outline-none"
        onClick={() => {}}
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </header>
  );
}

export default Header;
