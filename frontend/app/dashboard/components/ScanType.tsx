import { Check } from "lucide-react";

interface ScanTypeProps {
  icon: string;
  title: string;
  price: string;
  subtitle: string;
  points: string[];
  selected: boolean;
  onSelect: () => void;
}

const ScanType = ({
  icon,
  title,
  price,
  subtitle,
  points,
  selected,
  onSelect,
}: ScanTypeProps) => {
  return (
    <div
      onClick={onSelect}
      className={`
        relative flex h-full w-[450px] flex-col
        cursor-pointer
        rounded-3xl
        border-2
        bg-white
        p-8 text-black
        transition-all duration-300

        ${
          selected
            ? "border-[#8453f6] shadow-[0_0_20px_rgba(132,83,246,0.25)] -translate-y-2"
            : "border-[#e0e0e0] shadow-[0_0_12px_rgba(0,0,0,0.08)] hover:-translate-y-1"
        }
      `}
    >
      <div className="absolute -top-12 left-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#e0e0e0] bg-[#f5f5f5] shadow-[0_0_15px_rgba(0,0,0,0.08)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[34px]">
          {icon}
        </div>
      </div>

      <div className="mt-14">
        <span className="rounded-full bg-[#f3f3f3] px-4 py-3 text-sm text-[#555]">
          {title}
        </span>
      </div>

      <div className="mt-10 flex items-end gap-4">
        <span className="text-[64px] font-bold leading-none">${price}</span>
        <span className="mb-1 text-[22px] text-[#666]">/scan</span>
      </div>

      <p className="mt-3 text-[16px] text-[#777]">{subtitle}</p>

      <div className="my-10 h-px w-full bg-[#e5e5e5]" />

      <div className="flex flex-col gap-5">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[16px] text-[#555]"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#999]">
              <Check size={12} strokeWidth={2} />
            </div>

            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanType;
