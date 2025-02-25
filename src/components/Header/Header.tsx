"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const NAVIGATION_LINKS = [
  { href: "https://blog.earthfast.com", label: "Blog" },
  { href: "https://docs.earthfast.com", label: "Docs" },
];

// Reusable Logo component
const Logo = () => (
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
);

// Reusable Navigation Links component
const NavigationLinks = ({ className = "" }) => (
  <nav className={className}>
    {NAVIGATION_LINKS.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className="text-title-light dark:text-title-dark text-lg"
      >
        {label}
      </Link>
    ))}
  </nav>
);

// Reusable Get Started Button component
const GetStartedButton = ({ className = "" }) => (
  <Button
    href="https://dashboard.earthfast.com"
    target="_blank"
    rel="noopener noreferrer"
    variant="inverted"
    className={`leading-3 !py-3 ${className}`}
  >
    Get Started
  </Button>
);

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <header className="py-4 px-5 lg:px-0 max-w-wrapper mx-auto flex justify-between items-center absolute left-0 top-0 right-0 z-50">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <NavigationLinks className="hidden md:flex gap-10 mr-6" />
        <GetStartedButton />
      </div>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-800 shadow-md p-5 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Logo />
        <button
          className="absolute top-5 right-5 text-gray-900 dark:text-white focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          <FiX className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-center space-y-4 mt-16">
          <NavigationLinks className="flex flex-col items-center space-y-4" />
          <GetStartedButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
