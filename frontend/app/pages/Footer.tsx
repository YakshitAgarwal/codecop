import Link from "next/link";

const Footer = () => {
  const tabs = [
    { name: "Why CodeCop", route: "/" },
    { name: "How It Works", route: "/" },
    { name: "Features", route: "/" },
    { name: "About", route: "/" },
    { name: "Pricing", route: "/" },
  ];
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center gap-24">
      <div className="flex justify-center items-center gap-4">
        <div className="text-white border-2 border-[#424242] bg-[#1f1f1f] py-4 px-8 font-bold text-[28px] rounded-3xl">
          CodeCop
        </div>
        <div className="flex justify-center items-center gap-6 text-[16px] text-white border-2 border-[#424242] rounded-3xl bg-[#1f1f1f] py-6 px-8">
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
                after:bg-white
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
      </div>
      <div className="flex justify-center items-center text-white gap-10 border-2 border-[#424242] bg-[#1f1f1f] rounded-3xl py-8 px-24">
        <span
          className="
                inline-block
                h-5
                w-5
                rounded-full
                bg-[#ffcf27]
                shadow-[0_0_6px_rgba(255,207,39,0.9),0_0_14px_rgba(255,207,39,0.45)]
            "
        />
        <h1 className="text-[84px] font-bold">Run Your First Scan</h1>
        <span
          className="
                inline-block
                h-5
                w-5
                rounded-full
                bg-[#ffcf27]
                shadow-[0_0_6px_rgba(255,207,39,0.9),0_0_14px_rgba(255,207,39,0.45)]
            "
        />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
