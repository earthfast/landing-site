"use client";

import { useRef } from "react";
import Image from "next/image";
import SlickSlider from "react-slick";
import cx from "classnames";
import { Roboto_Mono } from "next/font/google";
import { TESTIMONIALS } from "@/data/StaticData";
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "react-icons/lia";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Slider = () => {
  const sliderRef = useRef<SlickSlider>(null);

  return (
    <div className="slider dark:bg-gray-800 bg-gray-100 rounded-2xl max-w-wrapper lg:mx-auto px-3 sm:py-9 py-7 relative sm:mx-5 mx-3">
      <div className="flex flex-col items-center mb-10">
        <h2
          className={cx(
            robotoMono.className,
            "text-xl font-normal text-[#0B44D8] dark:text-blue-300 tracking-[0.15rem] mb-4 text-center"
          )}
        >
          TESTIMONIALS
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center max-w-[35.75rem]">
          EarthFast is used by some of the world&apos;s leading decentralized
          projects.
        </p>
      </div>
      <div className="relative flex flex-col xl:flex-row items-center justify-center">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="z-10 mr-4 hidden xl:block"
        >
          <LiaChevronCircleLeftSolid
            size={44}
            className="text-gray-600 dark:text-gray-400"
          />
        </button>
        <div className="w-full sm:w-[unset]">
          <SlickSlider ref={sliderRef} {...settings}>
            {TESTIMONIALS.map(({ logo, whiteLogo, company, quote }, i) => (
              <div key={`${company}-${i}`} className="px-2">
                <div className="md:mt-0 bg-white dark:bg-gray-700 rounded-3xl p-6 sm:py-12 sm:px-10 min-h-[21.75rem]">
                  <div className="flex items-center mb-6 sm:mb-10">
                    <Image
                      src={logo}
                      alt={`${company} Logo`}
                      className="mr-4 !dark:hidden"
                      width={170}
                      height={32}
                    />
                    <Image
                      src={whiteLogo}
                      alt={`${company} Logo`}
                      className="mr-4 !dark:block !hidden"
                      width={170}
                      height={32}
                    />
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-base sm:text-2xl">
                    {quote}
                  </p>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="z-10 ml-4 hidden xl:block"
        >
          <LiaChevronCircleRightSolid
            size={44}
            className="text-gray-600 dark:text-gray-400"
          />
        </button>
      </div>
      <div className="flex justify-center mt-6 xl:hidden">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="z-10 mr-4"
        >
          <LiaChevronCircleLeftSolid
            size={44}
            className="text-gray-600 dark:text-gray-400"
          />
        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="z-10 ml-4"
        >
          <LiaChevronCircleRightSolid
            size={44}
            className="text-gray-600 dark:text-gray-400"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
