const WhyPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center gap-44">
      <div className="mt-20 bg-[#ffcf27] py-2 px-4 text-[18px] rounded-full">
        Why CodeCop
      </div>
      <div className="flex w-full justify-evenly items-center">
        <div className="flex flex-col gap-10">
          <div className="text-[80px] font-bold leading-[90px]">
            <h1>Run code with</h1>
            <h1>
              💻 <span className="bg-[#ffcf27] p-1 rounded-xl">confidence</span>
            </h1>
            <h1>Not assumptions</h1>
          </div>
          <div className="text-[24px]">
            <p>Investigate repositories with AI agents</p>
            <p>before executing unfamiliar code.</p>
          </div>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default WhyPage;
