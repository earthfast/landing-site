import Image from "next/image";

interface ProgressCardBaseProps {
  progress: number;
  label?: string;
  barColor?: string;
}

interface ProgressCardWithTitle extends ProgressCardBaseProps {
  title: string;
  logoSrc?: never;
}

interface ProgressCardWithImage extends ProgressCardBaseProps {
  title?: never;
  logoSrc: string;
}

type ProgressCardProps = ProgressCardWithTitle | ProgressCardWithImage;

const ProgressCard: React.FC<ProgressCardProps> = ({
  progress,
  label = "Loading",
  logoSrc,
  title,
  barColor,
}) => {
  return (
    <div className="flex flex-col items-center bg-[#2E93FF] dark:bg-[#2E93FF]/[0.12] w-full p-4 sm:p-6 rounded-xl border-[1px] dark:border-white/[0.12] max-w-[30.5rem]">
      <div className="py-3 px-4 bg-white/[0.16] rounded-xl border-[1px] border-[#F5F5F5]/[0.1] mb-4 sm:mb-6 shadow-lg">
        {logoSrc ? (
          <Image src={logoSrc} alt="Company" width={68} height={34} />
        ) : (
          <span className="sm:text-lg text-xs text-white">{title}</span>
        )}
      </div>
      <div className="w-full bg-white/[0.1] p-1 pr-2 rounded-lg flex gap-3 items-center justify-between">
        <div
          className="h-4 sm:h-6 rounded-lg sm:text-xs text-[0.5rem] dark:bg-primary-light bg-[#002C53]"
          style={{ width: `${progress}%`, ...(barColor && { backgroundColor: barColor }) }}
        />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default ProgressCard;
