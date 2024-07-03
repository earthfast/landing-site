"use client";

import Image from "next/image";
import cx from "classnames";
import { Roboto_Mono } from "next/font/google";
import { TESTIMONIALS } from "@/data/staticInfo";
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "react-icons/lia";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const Slider = () => {
  return (
    <div className="bg-gradient-to-b dark:from-[#2E93FF] dark:to-[#007DD8] from-[#2E93FF]/[0.3] to-[#2E93FF] rounded-lg max-w-[87rem] sm:mx-auto px-5 pt-8 pb-10 sm:pt-16 sm:px-12 sm:pb-14 relative mx-3">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="mb-10 sm:mb-0">
          <h2
            className={cx(
              robotoMono.className,
              "text-xs sm:text-base font-normal text-[#0B44D8] dark:text-[#081842] tracking-[0.15rem] mb-4 text-center sm:text-left"
            )}
          >
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold text-title-light dark:text-title-dark mt-0 text-center sm:text-left mb-4 sm:mb-6">
            EarthFast values partners.
          </h3>
          <p className="text-body-light dark:text-body-dark text-xs sm:text-lg text-center sm:text-left sm:max-w-[35.75rem] max-w-full">
            Service providers, technical alliances, resellers and integrators
            are loving the innovation and profitability Storj brings to a
            stagnant, high-cost market.
          </p>
        </div>
        <div className="md:mt-0 bg-white dark:bg-white/[0.20] rounded-3xl transition-transform duration-500 ease-in-out transform max-w-full sm:max-w-[39.75rem] p-6 sm:py-12 sm:px-10 min-h-[21.75rem]">
          <div className="flex items-center mb-6 sm:mb-10">
            <Image
              src={TESTIMONIALS[0].logo}
              alt={`${TESTIMONIALS[0].company} Logo`}
              className="mr-4 dark:hidden"
              width={170}
              height={32}
            />
            <Image
              src={TESTIMONIALS[0].whiteLogo}
              alt={`${TESTIMONIALS[0].company} Logo`}
              className="mr-4 dark:block hidden"
              width={170}
              height={32}
            />
          </div>
          <p className="text-body-light dark:text-white text-base sm:text-2xl">
            {TESTIMONIALS[0].quote}
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start sm:absolute sm:bottom-8 sm:left-6 gap-2 mt-6 sm:mt-0">
        <button
        // onClick={handlePrev}
        >
          <LiaChevronCircleLeftSolid size={44} color="black" />
        </button>
        <button
        // onClick={handleNext}
        >
          <LiaChevronCircleRightSolid size={44} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
