import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        <img src={"logo.svg"} alt="CodeCop" className="h-28" />
      </Link>
      <div className="rounded-4xl bg-gradient-to-r from-[#8453f6] to-[#4379f6] p-[2px] cursor-pointer">
        <div className="rounded-4xl bg-white px-5 py-2 text-[18px]">
          <span className="bg-gradient-to-r from-[#8453f6] to-[#4379f6] bg-clip-text text-transparent font-semibold">
            Help
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
