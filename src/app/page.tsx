import { MainBanner } from '@/components/Banner';
import Header from '@/components/Header';
import FeaturedRow from '@/components/FeaturedRow';
import Image from "next/image";
import { FEATURED_ROWS_INFO } from '@/data/staticInfo';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Header />
      <div className="max-w-wrapper mx-auto flex gap-28 flex-col">
        {FEATURED_ROWS_INFO.map(
          ({ id, title, description, media }) => (
            <FeaturedRow
              key={id}
              title={title}
              description={description}
              media={media}
            />
          )
        )}
      </div>
    </main>
  );
}
