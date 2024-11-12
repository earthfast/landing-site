"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

function Header() {
  return (
    <header className="py-4 px-5 xl:px-0 max-w-wrapper mx-auto flex justify-between items-center absolute left-0 top-0 right-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image
          width={36}
          height={36}
          src="/dark-logo.svg"
          alt="Earth fast logo"
          className="hidden dark:block w-6 h-6 sm:w-9 sm:h-9"
        />
        <Image
          width={36}
          height={36}
          src="/logo.svg"
          alt="Earth fast logo"
          className="dark:hidden w-6 h-6 sm:w-9 sm:h-9"
        />
        <h1 className="font-bold text-lg sm:text-2xl text-">EarthFast</h1>
      </Link>
      <nav className="hidden md:flex gap-14">
        <Link href="https://blog.earthfast.com" className="text-title-light dark:text-title-dark">
          Blog
        </Link>
        <Link href="https://docs.earthfast.com" className="text-title-light dark:text-title-dark">
          Docs
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button
          variant="inverted"
          className="leading-3 !py-3 font-bold"
          href="https://dashboard.earthfast.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}

function HeaderWithMobileAndButtons() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    console.log('isMobileMenuOpen', isMobileMenuOpen)
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="py-4 px-5 lg:px-0 max-w-wrapper mx-auto flex justify-between items-center absolute left-0 top-0 right-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image
          width={36}
          height={36}
          src="/dark-logo.svg"
          alt="Earth fast logo"
          className="hidden dark:block w-6 h-6 sm:w-9 sm:h-9"
        />
        <Image
          width={36}
          height={36}
          src="/logo.svg"
          alt="Earth fast logo"
          className="dark:hidden w-6 h-6 sm:w-9 sm:h-9"
        />
        <h1 className="font-bold text-lg sm:text-2xl text-">EarthFast</h1>
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <nav className="hidden md:flex gap-10 mr-6">
          {/* <Link
            href="https://blog.earthfast.com"
            className="text-title-light dark:text-title-dark"
          >
            Blog
          </Link> */}
          <Link
            href="https://docs.earthfast.com"
            className="text-title-light dark:text-title-dark"
          >
            Docs
          </Link>
        </nav>
        {/* <Button href="/" variant="text">
          Login
        </Button> */}
        <Button href="/" variant="inverted" className="leading-3 !py-3">
          Get Started
        </Button>
      </div>
      <button
        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
        onClick={handleMobileMenuToggle}
      >
        {isMobileMenuOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-800 shadow-md p-5 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={36}
            height={36}
            src="/dark-logo.svg"
            alt="Earth fast logo"
            className="hidden dark:block w-6 h-6 sm:w-9 sm:h-9"
          />
          <Image
            width={36}
            height={36}
            src="/logo.svg"
            alt="Earth fast logo"
            className="dark:hidden w-6 h-6 sm:w-9 sm:h-9"
          />
          <h1 className="font-bold text-lg sm:text-2xl">EarthFast</h1>
        </Link>
        <button
          className="absolute top-5 right-5 text-gray-900 dark:text-white focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          <FiX className="h-6 w-6" />
        </button>
        <nav className="flex flex-col items-center space-y-4 mt-16">
          {/* <Link
            href="https://blog.earthfast.com"
            className="text-title-light dark:text-title-dark text-lg"
          >
            Blog
          </Link> */}
          <Link
            href="https://docs.earthfast.com"
            className="text-title-light dark:text-title-dark text-lg"
          >
            Docs
          </Link>
          {/* <Button href="/" variant="text">
            Login
          </Button> */}
          <Button href="/" variant="inverted" className="leading-3 !py-3">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default HeaderWithMobileAndButtons;
