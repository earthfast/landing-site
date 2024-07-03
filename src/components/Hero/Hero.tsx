
import Image from "next/image";
import cx from 'classnames';
import { Roboto_Mono } from "next/font/google";
import Button from '@/components/Button';
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

function Hero() {
  return (
    <section className="text-center px-5 lg:px-0 bg-hero-gradient dark:bg-none">
      <div className="pt-[6.5rem] sm:pt-[8.5rem] pb-[6.25rem] sm:pb-[10.31rem]">
        <div
          className={cx(
            robotoMono.className,
            "text-xs sm:text-base uppercase font-regular"
          )}
        >
          <span className="text-primary-light dark:text-primary-dark">#1</span>{" "}
          reprehenderit fugiat nulla
        </div>
        <h2 className="text-4xl sm:text-[3.5rem] font-semibold max-w-[34.37rem] mx-auto leading-none mb-6">
          <span className="text-primary-light dark:text-primary-dark">
            Decentralize
          </span>{" "}
          your frontend, securely.
        </h2>
        <p className="mb-10 text-body-light dark:text-body-dark sm:text-base text-sm max-w-[37.5rem] mx-auto">
          EarthFast is an infrastructure protocol that shifts the responsibility
          of updating, deploying and hosting your frontend to a community of
          voters.
        </p>
        <Button className="w-full sm:max-w-44 mb-10 sm:mb-14">
          Get Started
        </Button>
        <div
          className={cx(
            robotoMono.className,
            "text-[0.625rem] sm:text-xs uppercase font-semibold tracking-[0.3rem] mb-6"
          )}
        >
          Trusted by:
        </div>
        <div className="flex items-center justify-center sm:justify-between gap-10 max-w-[45.875rem] mx-auto">
          <Image
            src="/audius.png"
            className="dark:hidden max-w-20 sm:max-w-40"
            width={150}
            height={31}
            alt="Audius"
          />
          <Image
            src="/audius-white.png"
            className="hidden dark:block max-w-20 sm:max-w-40"
            width={150}
            height={31}
            alt="Audius"
          />
          <Image
            src="/synthetix.png"
            width={170}
            height={12}
            alt="Synthetix"
            className="max-w-24 sm:max-w-44"
          />
          <Image
            src="/thales.png"
            className="dark:hidden max-w-20 sm:max-w-36"
            width={134}
            height={32}
            alt="Thales"
          />
          <Image
            src="/thales-white.png"
            className="hidden dark:block max-w-20 sm:max-w-36"
            width={134}
            height={32}
            alt="Thales"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
