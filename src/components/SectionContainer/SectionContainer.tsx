interface SectionContainerProps {
  title: string;
  highlightedWord?: string;
  description?: string;
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
      <div className="px-5 sm:px-0 relative">
        <div className="hidden dark:block absolute bg-gradient-to-br from-transparent to-gradient-color rounded-full opacity-32 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1/2" />
        <h2 className="text-3xl sm:text-5xl text-center mb-2 sm:mb-4 font-semibold">
          {formattedTitle}
        </h2>
        {description && (
          <p className="text-body-light dark:text-body-dark text-center text-sm sm:text-base max-w-[49.5rem] mx-auto mb-10 sm:mb-14">
            {description}
          </p>
        )}
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
  const regex = new RegExp(`(${highlightedWord})`, 'gi');
  return title.split(regex).map((part, i) => {
    if (part.toLocaleLowerCase() === highlightedWord.toLocaleLowerCase()) {
      return (
        <span
          key={`${part}-${i}`}
          className="text-primary-light dark:text-primary-dark"
        >
          {part}
        </span>
      );
    }
    return <>{part}</>;
  });
};

export default SectionContainer
