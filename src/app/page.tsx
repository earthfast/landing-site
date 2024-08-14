import { MainBanner } from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import FeaturedRow from "@/components/FeaturedRow";
import { FEATURED_ROWS_INFO } from "@/data/StaticData";
import SectionContainer from "@/components/SectionContainer";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      {/* <MainBanner /> */}
      <div className="relative">
        <Header />
        <Hero />
        <div className="max-w-wrapper mx-auto flex flex-col mt-20 mb-12 gap-16">
          {FEATURED_ROWS_INFO.map(({ id, ...rest }) => (
            <FeaturedRow key={id} {...rest} />
          ))}
        </div>
        {/* <SectionContainer
          title="Learn how EarthFast works"
          highlightedWord="EarthFast"
          description="Cryptography has unleashed the latent power of the Internet by enabling interactions between mutually-distrusting parties. EarthFast [sigh-uh] harnesses this power to create a trustless cloud storage marketplace, allowing buyers and sellers to transact directly."
          content={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-wrapper mx-auto px-5 sm:px-0">
              {FEATURED_CARDS_INFO.map(({ id, ...rest }) => (
                <div key={id} className="flex flex-col h-full">
                  <FeaturedCard {...rest} />
                </div>
              ))}
            </div>
          }
        /> */}
        {/* <SectionContainer
          title="Why projects choose EarthFast"
          highlightedWord="EarthFast"
          description="Cryptography has unleashed the latent power of the Internet by enabling interactions between mutually-distrusting parties. EarthFast [sigh-uh] harnesses this power to create a trustless cloud storage marketplace, allowing buyers and sellers to transact directly."
          content={
            <>
              <div className="border-t-[1px] dark:border-t-white/[0.12] border-t-black/[0.1]">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-wrapper mx-auto px-4 xl:px-0">
                  {FEATURED_MINI_CARDS_INFO.slice(0, 3).map(
                    ({ id, ...rest }, i) => (
                      <FeaturedMiniCard
                        key={id}
                        className={cx(
                          "border-x-[1px] lg:border-x-0 dark:border-x-white/[0.12] border-x-black/[0.1]",
                          !i
                            ? "lg:pl-0"
                            : i === 2
                            ? "lg:pr-0"
                            : "lg:border-x-[1px] dark:border-x-white/[0.12] border-x-black/[0.1] border-y-[1px] lg:border-y-0 dark:border-y-white/[0.12] border-y-black/[0.1]"
                        )}
                        {...rest}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="border-y-[1px]  dark:border-y-white/[0.12] border-y-black/[0.1]">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-wrapper mx-auto px-4 xl:px-0">
                  {FEATURED_MINI_CARDS_INFO.slice(3, 6).map(
                    ({ id, ...rest }, i) => (
                      <FeaturedMiniCard
                        key={id}
                        className={cx(
                          "border-x-[1px] lg:border-x-0 dark:border-x-white/[0.12] border-x-black/[0.1]",
                          !i
                            ? "lg:pl-0"
                            : i === 2
                            ? "lg:pr-0"
                            : "lg:border-x-[1px] dark:border-x-white/[0.12] border-x-black/[0.1] border-y-[1px] lg:border-y-0 dark:border-y-white/[0.12] border-y-black/[0.1]"
                        )}
                        {...rest}
                      />
                    )
                  )}
                </div>
              </div>
            </>
          }
        /> */}
        <SectionContainer
          title="Ready to try EarthFast?"
          highlightedWord="EarthFast"
          description="Deploy your site in 90 seconds"
          content={
            <div className="flex gap-4 justify-center mb-20">
              <Button href="https://dashboard.earthfast.com" className="px-7" target="_blank" rel="noopener noreferrer">Get Started</Button>
              {/* <Button href="https://docs.earthfast.io" className="px-7" variant="inverted" target="_blank" rel="noopener noreferrer">
                View Docs
              </Button> */}
            </div>
          }
        />
        <Slider />
        <Footer />
      </div>
    </main>
  );
}
