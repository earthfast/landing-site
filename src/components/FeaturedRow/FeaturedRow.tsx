import cx from "classnames";

interface FeaturedRowProps {
  title: string;
  description: string;
  media: React.ReactNode;
  inverted?: boolean;
  cta?: React.ReactNode;
}

function FeaturedRow({
  title,
  description,
  media,
  cta,
  inverted,
}: FeaturedRowProps) {
  return (
    <section
      className={cx(
        "flex justify-center px-5 xl:px-0 text-center lg:text-left items-center flex-col gap-10",
        inverted ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div>
        <h2 className="text-title-light dark:text-title-dark mb-2 lg:mb-4 text-[1.625rem] sm:text-[2.5rem] font-semibold">
          {title}
        </h2>
        <p className="text-body-light dark:text-body-dark mb-6 text-sm sm:text-base max-w-[28rem]">
          {description}
        </p>
        {cta}
      </div>
      <div
        className={cx(
          "relative w-full max-w-[35rem] flex items-center flex-col gap-3",
          inverted ? "lg:items-start" : "lg:items-end"
        )}
      >
        <div
          className={cx(
            "absolute bg-gradient-to-br from-transparent dark:to-gradient-color to-gradient-color-light  rounded-full opacity-32 blur-3xl top-1/2 left-1/2 transform -translate-y-1/2 h-full w-1/2",
            inverted ? "-translate-x-2/4" : "-translate-x-1/4"
          )}
        />
        {media}
      </div>
    </section>
  );
}

export default FeaturedRow;
