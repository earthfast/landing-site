import Image from "next/image";

interface FeaturedRowProps {
  title: string;
  description: string;
  media: React.ReactNode;
}

function FeaturedRow({ title, description, media }: FeaturedRowProps) {
  return (
    <section className="flex flex-col lg:flex-row items-center px-5 lg:px-0 text-center lg:text-left justify-between">
      <div className="max-w-[30.37rem]">
        <h2 className="text-title-light dark:text-title-dark mb-2 lg:mb-4 text-[1.625rem] sm:text-[2.5rem] font-semibold">
          {title}
        </h2>
        <p className="text-body-light dark:text-body-dark mb-6 text-sm sm:text-base">
          {description}
        </p>
      </div>
      {media}
    </section>
  );
}

export default FeaturedRow;
