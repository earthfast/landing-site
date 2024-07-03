import Image from 'next/image';
import IconBadge from '@/components/IconBadge';

interface FeaturedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
};

function FeaturedCard({
  icon,
  title,
  description,
  imageSrc,
}: FeaturedCardProps) {
  return (
    <article className="border-2 border-[#525762]/[0.10] rounded-2xl h-full w-full overflow-hidden">
      <div className="sm:pl-8 pt-8 h-full w-full flex flex-col items-center sm:items-start bg-card-gradient dark:bg-transparent">
        <div className="mb-4 sm:mb-3">
          <IconBadge icon={icon} />
        </div>
        <h3 className="font-semibold text-2xl mb-2 text-title-light dark:text-title-dark text-center sm:text-left">
          {title}
        </h3>
        <p className="text-body-light dark:text-body-dark sm:text-base text-sm sm:mb-12 mb-14 max-w-[18.875rem] sm:max-w-full mx-auto sm:mx-0 text-center sm:text-left">
          {description}
        </p>
        <Image
          alt={title}
          src={imageSrc}
          width={530}
          height={300}
          className="max-w-[33.12rem] max-h-[18.75rem] self-end rounded-tl-lg rounded-br-lg border-4 border-white dark:border-[#263744] relative left-1 top-1"
        />
      </div>
    </article>
  );
}

export default FeaturedCard;
