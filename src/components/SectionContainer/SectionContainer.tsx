interface SectionContainerProps {
  title: string;
  highlightedWord?: string;
  description: string;
  content: React.ReactNode;
}

function SectionContainer({
  title,
  highlightedWord,
  description,
  content,
}: SectionContainerProps) {
  const formattedTitle = formatTitle({ title, highlightedWord });
  return (
    <section className="sm:pt-28 pt-20">
      <div className="px-5 sm:px-0">
        <h2 className="text-3xl sm:text-5xl text-center mb-2 sm:mb-4 font-semibold">
          {formattedTitle}
        </h2>
        <p className="text-body-light dark:text-body-dark text-center text-sm sm:text-base max-w-[49.5rem] mx-auto mb-10 sm:mb-14">
          {description}
        </p>
      </div>
      {content}
    </section>
  );
}

function formatTitle({
  title,
  highlightedWord,
}: Pick<SectionContainerProps, "title" | "highlightedWord">) {
  if (!highlightedWord) return title;
  const arrayTitle = title.split(' ');
  return arrayTitle.map((word, i) => {
    if (word.toLocaleLowerCase() === highlightedWord.toLocaleLowerCase()) {
      return (
        <span
          key={`${word}-${i}`}
          className="text-primary-light dark:text-primary-dark"
        >
          {word}{" "}
        </span>
      );
    }
    return <>{word}{" "}</>;
  });
};

export default SectionContainer
