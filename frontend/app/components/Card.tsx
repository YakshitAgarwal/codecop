import { LucideIcon, ArrowUpRight } from "lucide-react";

interface CardProps {
  icon: string;
  heading: string;
  detail: string;
}

const Card = ({ icon, heading, detail }: CardProps) => {
  return (
    <div className="relative w-full h-70">
      <div className="absolute inset-0 rounded-2xl bg-black/10 blur-xl" />
      <div
        className="
          relative
          h-full
          w-full
          bg-white
          text-black
          p-10
          border-2
          border-[#e0e0e0]
          rounded-2xl
          flex
          flex-col
          justify-between
          transition-all
          duration-300
          ease-out
          hover:-translate-y-4
          hover:translate-x-4
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        "
      >
        <div className="flex justify-between items-center">
          <span className="text-[48px]">{icon}</span>

          <ArrowUpRight size={32} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[32px] font-semibold">{heading}</h2>
          <p className="text-[18px]">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
