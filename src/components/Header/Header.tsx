"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="py-4 px-5 lg:px-0 max-w-wrapper mx-auto flex justify-between items-center absolute left-0 top-0 right-0">
      <Link href="/" className="flex items-center gap-3">
        <Image width={37} height={40} src="/logo.svg" alt="Earth fast logo" />
        <h1 className="font-bold text-lg sm:text-2xl text-">EarthFast</h1>
      </Link>
      <nav className="hidden md:flex gap-14">
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
        <Button href="/" variant="inverted" className="leading-3 !py-3">
          Get Started
        </Button>
      </div>
      <button
        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
        onClick={() => {}}
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </header>
  );
}

export default Header;
