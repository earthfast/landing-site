interface IconBadgeProps {
  icon: React.ReactNode;
}

function IconBadge({ icon }: IconBadgeProps) {
  return (
    <div className="rounded-lg w-14 h-14 flex justify-center items-center bg-[#EBF1FF] dark:bg-slate-700 border-2 border-[#EBF1FF] dark:border-gray-600">
      <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:bg-light-mask dark:after:bg-dark-mask after:bottom-[-5px]">
        {icon}
      </div>
    </div>
  );
}

export default IconBadge
