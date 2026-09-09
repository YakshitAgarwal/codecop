import Link from "next/link";

const Navbar = () => {
  const tabs = [
    { name: "Why CodeCop", route: "#why-codecop" },
    { name: "How It Works", route: "#how-it-works" },
    { name: "Features", route: "#features" },
    { name: "About", route: "#about" },
    { name: "Pricing", route: "#pricing" },
  ];
  return (
    <div className="flex justify-between items-center bg-white border-2 border-[#e0e0e0] p-[6px] rounded-2xl gap-10">
      <Link href={"/"} className="pl-4 text-[34px] font-semibold">
        CodeCop
      </Link>
      <div className="flex justify-center items-center gap-6 text-[16px]">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.route}
            className="
                relative
                cursor-pointer
                font-medium
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-full
                after:bg-black
                after:origin-left
                after:scale-x-0
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
              "
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <Link
        href={"/dashboard"}
        className="bg-black text-white text-[18px] py-3 px-6 rounded-2xl"
      >
        Try CodeCop
      </Link>
    </div>
  );
};

export default Navbar;
