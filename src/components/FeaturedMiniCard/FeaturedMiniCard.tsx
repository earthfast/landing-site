
import cx from "classnames";
import IconBadge from '@/components/IconBadge';

interface FeaturedMiniCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

function FeaturedMiniCard({
  icon,
  title,
  description,
  className,
}: FeaturedMiniCardProps) {
  return (
    <article className={cx("py-8 px-6 sm:px-10", className)}>
      <div className="flex sm:gap-3 gap-4 items-center lg:flex-row flex-col mb-4">
        <IconBadge icon={icon} />
        <h3 className="font-semibold text-title-light dark:text-title-dark text-center sm:text-left text-xl sm:text-2xl">
          {title}
        </h3>
      </div>
      <p className="text-body-light dark:text-body-dark sm:text-base text-sm max-w-[18.875rem] sm:max-w-full mx-auto sm:mx-0 text-center lg:text-left">
        {description}
      </p>
    </article>
  );
}

export default FeaturedMiniCard;
