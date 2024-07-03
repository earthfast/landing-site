import { MainBanner } from '@/components/Banner';
import Header from '@/components/Header';
import FeaturedRow from '@/components/FeaturedRow';
import Image from "next/image";
import { FEATURED_CARD_INFO, FEATURED_ROWS_INFO } from '@/data/staticInfo';
import SectionContainer from '@/components/SectionContainer';
import FeaturedCard from '@/components/FeaturedCard';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-wrapper mx-auto">
            {FEATURED_CARD_INFO.map(({ id, ...rest }) => (
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
        content={<></>}
      />
    </main>
  );
}
