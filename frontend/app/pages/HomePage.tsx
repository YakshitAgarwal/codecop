import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen bg-white p-6 overflow-hidden">
      <div className="relative p-8 h-full bg-[#f9f9f9] border-3 border-[#e0e0e0] rounded-3xl">
        <FloatingElements />

        <div className="relative z-10">
          <div className="flex justify-center items-center">
            <Navbar />
          </div>

          <div className="flex flex-col justify-center items-center mt-14 gap-8">
            <div className="flex flex-col justify-center items-center text-[72px] leading-[90px] font-bold">
              <h1>Every Repo has</h1>

              <h1>
                <span className="bg-[#ffcf27] p-1 rounded-xl">Secrets.</span>{" "}
                Find them.
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-[20px]">
              <p>CodeCop investigates GitHub repositories using AI agents</p>
              <p>to uncover suspicious and malicious code.</p>
            </div>

            <Link
              href={"/"}
              className="bg-[#1c76ff] rounded-xl text-white flex justify-center items-center gap-4 text-[18px] py-4 px-10"
            >
              Explore Demo
              <ArrowRight size={24} className="border rounded-full p-[2px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
