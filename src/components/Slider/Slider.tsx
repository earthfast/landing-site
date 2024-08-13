"use client";

import { useRef } from "react";
import Image from "next/image";
import SlickSlider from "react-slick";
import cx from "classnames";
import { Roboto_Mono } from "next/font/google";
import { TESTIMONIALS } from "@/data/staticInfo";
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
};

const Slider = () => {
  const sliderRef = useRef<SlickSlider>(null);

  return (
    <div className="slider bg-gradient-to-b dark:from-[#2E93FF] dark:to-[#007DD8] from-[#2E93FF]/[0.3] to-[#2E93FF] rounded-lg max-w-[87rem] lg:mx-auto px-5 pt-8 pb-10 sm:pt-16 sm:px-12 sm:pb-14 relative sm:mx-5 mx-3">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="mb-10 lg:mb-0">
          <h2
            className={cx(
              robotoMono.className,
              "text-xs sm:text-base font-normal text-[#0B44D8] dark:text-white tracking-[0.15rem] mb-4 text-center sm:text-left"
            )}
          >
            TESTIMONIALS
          </h2>
          {/* <h3 className="text-3xl sm:text-4xl font-semibold text-title-light dark:text-title-dark mt-0 text-center sm:text-left mb-4 sm:mb-6">
            EarthFast values partners.
          </h3> */}
          <p className="text-body-light dark:text-body-dark text-xs sm:text-lg text-center sm:text-left sm:max-w-[35.75rem] max-w-full">
            EarthFast is used by some of the world&apos;s leading decentralized projects.
          </p>
        </div>
        <SlickSlider ref={sliderRef} {...settings}>
          {TESTIMONIALS.map(({ logo, whiteLogo, company, quote }, i) => (
            <div key={`${company}-${i}`} className="px-2">
              <div className="md:mt-0 bg-white dark:bg-white/[0.20] rounded-3xl max-w-full sm:max-w-[39.75rem] p-6 sm:py-12 sm:px-10 min-h-[21.75rem]">
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
                <p className="text-body-light dark:text-white text-base sm:text-2xl">
                  {quote}
                </p>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
      <div className="flex justify-center md:justify-start lg:absolute lg:bottom-8 md:left-6 gap-2 mt-6 lg:mt-0">
        <button onClick={() => sliderRef?.current?.slickPrev()}>
          <LiaChevronCircleLeftSolid size={44} color="black" />
        </button>
        <button onClick={() => sliderRef?.current?.slickNext()}>
          <LiaChevronCircleRightSolid size={44} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Slider;