import { ShieldCheck, Code2, Search, Bug, User } from "lucide-react";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className: string;
}

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingCard className="left-[3%] top-[43%]">
        <User size={84} className="text-pink-500" />
      </FloatingCard>

      <FloatingCard className="left-[23%] top-[58%]">
        <Code2 size={84} className="text-yellow-400" />
      </FloatingCard>

      <FloatingCard className="left-[44%] top-[72%]">
        <ShieldCheck size={84} className="text-pink-500" />
      </FloatingCard>

      <FloatingCard className="right-[23%] top-[58%]">
        <Search size={84} className="text-blue-500" />
      </FloatingCard>

      <FloatingCard className="right-[4%] top-[43%]">
        <Bug size={84} className="text-yellow-400" />
      </FloatingCard>
    </div>
  );
}

function FloatingCard({ children, className }: FloatingCardProps) {
  return (
    <div
      className={`
        absolute
        flex items-center justify-center
        h-58 w-64
        rotate-[-30deg]
        skew-x-30
        rounded-2xl
        border
        ${className}
      `}
    >
      <div>{children}</div>
    </div>
  );
}
