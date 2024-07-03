import cx from "classnames";
import { MainBanner } from "@/components/Banner";
import Header from "@/components/Header";
import FeaturedRow from "@/components/FeaturedRow";
import {
  FEATURED_CARDS_INFO,
  FEATURED_MINI_CARDS_INFO,
  FEATURED_ROWS_INFO,
} from "@/data/staticInfo";
import SectionContainer from "@/components/SectionContainer";
import FeaturedCard from "@/components/FeaturedCard";
import FeaturedMiniCard from "@/components/FeaturedMiniCard";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Header />
      <div className="max-w-wrapper mx-auto flex gap-28 flex-col">
        {FEATURED_ROWS_INFO.map(({ id, ...rest }) => (
          <FeaturedRow key={id} {...rest} />
        ))}
      </div>
      <SectionContainer
        title="Learn how Sia works"
        highlightedWord="Sia"
        description="Cryptography has unleashed the latent power of the Internet by enabling interactions between mutually-distrusting parties. Sia [sigh-uh] harnesses this power to create a trustless cloud storage marketplace, allowing buyers and sellers to transact directly."
        content={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-wrapper mx-auto px-5 sm:px-0">
            {FEATURED_CARDS_INFO.map(({ id, ...rest }) => (
              <div key={id} className="flex flex-col h-full">
                <FeaturedCard {...rest} />
              </div>
            ))}
          </div>
        }
      />
      <SectionContainer
        title="Why projects choose EarthFast"
        highlightedWord="EarthFast"
        description="Cryptography has unleashed the latent power of the Internet by enabling interactions between mutually-distrusting parties. Sia [sigh-uh] harnesses this power to create a trustless cloud storage marketplace, allowing buyers and sellers to transact directly."
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
      />
    </main>
  );
}
