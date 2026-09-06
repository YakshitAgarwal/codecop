import { Check } from "lucide-react";

interface PriceProps {
  icon: string;
  title: string;
  price: string;
  subtitle: string;
  points: string[];
}

const Price = ({ icon, title, price, subtitle, points }: PriceProps) => {
  return (
    <div
      className="
    relative flex h-full w-[450px] flex-col
    rounded-3xl
    border-2 border-[#3a3a3a]
    bg-[#1f1f1f]
    p-8 text-white

    shadow-[0_0_12px_rgba(255,255,255,0.12),0_0_30px_rgba(255,255,255,0.08),0_0_50px_rgba(255,255,255,0.05)]
  "
    >
      <div className="absolute -top-12 left-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#303030] bg-[#151515] shadow-[0_0_15px_rgba(255,255,255,0.12)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1f1f1f] text-[34px]">
          {icon}
        </div>
      </div>
      <div className="mt-14">
        <span className="rounded-full bg-[#151515] px-4 py-3 text-sm text-[#d0d0d0] shadow-[0_0_15px_rgba(255,255,255,0.12)]">
          {title}
        </span>
      </div>
      <div className="mt-10 flex items-end gap-4">
        <span className="text-[64px] font-bold leading-none">${price}</span>
        <span className="mb-1 text-[22px] text-[#d0d0d0]">/scan</span>
      </div>
      <p className="mt-3 text-[16px] text-[#b0b0b0]">{subtitle}</p>
      <div className="my-10 h-px w-full bg-[#353535]" />
      <div className="flex flex-col gap-5">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[16px] text-[#d0d0d0]"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#777]">
              <Check size={12} strokeWidth={2} />
            </div>
            <span>{point}</span>
          </div>
        ))}
      </div>
      <button className="mt-10 w-full rounded-xl bg-[#1c76ff] py-4 text-[16px] font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b8cff]">
        Run {title}
      </button>
    </div>
  );
};

export default Price;
