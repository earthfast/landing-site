import { FaArrowRight } from "react-icons/fa";

interface BannerProps {
  children: React.ReactNode,
}

function Banner({ children }: BannerProps) {
  return (
    <div className="bg-primary-light dark:bg-primary-light flex justify-center py-4 px-14">
      {children}
    </div>
  );
}

export function MainBanner() {
  return (
    <Banner>
      <p className="text-white text-xxs sm:text-sm text-center">
        Duis aute irure dolor in reprehenderit fugiat nulla pariatur.{" "}
        <span className="font-bold inline-flex items-center gap-1">
          Lorem Ipsum <FaArrowRight />
        </span>
      </p>
    </Banner>
  );
}

export default Banner
