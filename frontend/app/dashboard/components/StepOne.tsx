import React from "react";

interface GithubLinkProps {
  githubLink: string;
  setGithubLink: React.Dispatch<React.SetStateAction<string>>;
  nextStep: () => void;
}

const StepOne = ({ githubLink, setGithubLink, nextStep }: GithubLinkProps) => {
  const isLinkEntered = githubLink.trim().length > 0;

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-[40px]">Enter GitHub repo link</div>

        <input
          type="text"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          spellCheck={false}
          className="
            w-full
            max-w-[1000px]
            text-center
            border-none
            text-[60px]
            outline-none
            caret-transparent
            focus:outline-none
            focus:ring-0
            font-semibold
          "
          placeholder="https://github.com/..."
        />

        <button
          type="button"
          disabled={!isLinkEntered}
          className="bg-gradient-to-r from-[#8453f6] to-[#4379f6] text-white text-[20px] px-6 py-3 rounded-4xl cursor-pointer"
          onClick={nextStep}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StepOne;
