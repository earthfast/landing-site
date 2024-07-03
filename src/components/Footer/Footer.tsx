import Image from "next/image";
import { FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-wrapper mx-auto py-10 flex justify-between items-center flex-col sm:flex-row gap-8">
      <div className="flex items-center gap-3">
        <Image width={37} height={40} src="/logo.svg" alt="Earth fast logo" />
        <h1 className="font-bold text-lg sm:text-2xl text-">EarthFast</h1>
      </div>
      <a href="mailto:contact@armadanetwork.com">contact@armadanetwork.com</a>
      <div className="flex items-center gap-8">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:bg-white-light-mask after:bottom-[-5px]">
            <FaTwitter size={28} color="#2E93FF" className="dark:hidden" />
          </div>
          <FaTwitter size={28} className="hidden dark:block" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:bg-white-light-mask after:bottom-[-5px]">
            <FaGithub size={28} color="#2E93FF" className="dark:hidden" />
          </div>
          <FaGithub size={28} className="hidden dark:block" />
        </a>
      </div>
    </footer>
  );
}



export default Footer;
