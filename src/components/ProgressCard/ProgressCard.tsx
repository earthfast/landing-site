import Image from "next/image";

interface ProgressCardProps {
  progress: number;
  label?: string;
  barColor?: string;
  title?: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  progress,
  label = "Loading",
  logoSrc,
  title,
  barColor,
  logoWidth = 29,
  logoHeight = 29,
}) => {
  return (
    <div className="flex flex-col items-center bg-[#2E93FF] dark:bg-[#2E93FF]/[0.12] w-full p-4 rounded-xl border-[1px] dark:border-white/[0.12] max-w-[30.5rem]">
      <div className="py-3 px-4 bg-white/[0.16] rounded-xl border-[1px] border-[#F5F5F5]/[0.1] mb-4 sm:mb-6 shadow-lg flex items-center justify-center gap-2 min-w-[9.375rem]">
        {(!!logoSrc || !!title) && (
          <>
            {!!logoSrc && (
              <Image src={logoSrc} alt="Company" width={logoWidth} height={logoHeight} />
            )}
            {!!title && (
              <span className="sm:text-lg text-xs text-white">{title}</span>
            )}
          </>
        )}
      </div>
      <div className="w-full bg-white/[0.1] p-1 pr-2 rounded-lg flex gap-3 items-center justify-between">
        <div
          className="h-4 sm:h-4 rounded-lg sm:text-xs text-[0.5rem] dark:bg-primary-light bg-[#002C53]"
          style={{
            width: `${progress}%`,
            ...(barColor && { backgroundColor: barColor }),
          }}
        />
        <span className="text-sm text-white">{label}</span>
      </div>
    </div>
  );
};

export default ProgressCard;
