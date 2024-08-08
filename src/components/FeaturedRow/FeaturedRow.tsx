import cx from "classnames";
import Button from "../Button";

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
        "flex flex-col items-center px-5 lg:px-0 text-center lg:text-left justify-between gap-7",
        inverted ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="max-w-[30.37rem]">
        <h2 className="text-title-light dark:text-title-dark mb-2 lg:mb-4 text-[1.625rem] sm:text-[2.5rem] font-semibold">
          {title}
        </h2>
        <p className="text-body-light dark:text-body-dark mb-6 text-sm sm:text-base">
          {description}
        </p>
        {cta}
      </div>
      <div
        className={cx(
          "relative w-full flex items-center flex-col gap-3",
          inverted ? "lg:items-start" : "lg:items-end"
        )}
      >
        <div
          className={cx(
            "hidden dark:block absolute bg-gradient-to-br from-transparent to-gradient-color rounded-full opacity-32 blur-3xl top-1/2 left-1/2 transform -translate-x-1/4  -translate-y-1/2 h-full w-1/2",
            (cx(
              "hidden dark:block absolute bg-gradient-to-br from-transparent to-gradient-color rounded-full opacity-32 blur-3xl top-1/2 left-1/2 transform -translate-y-1/2 h-full w-1/2"
            ),
            inverted ? "-translate-x-2/4" : "-translate-x-1/2")
          )}
        />
        {media}
      </div>
    </section>
  );
}

export default FeaturedRow;
