const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center gap-44 bg-black">
      <div className="mt-28 bg-[#ffcf27] py-2 px-4 text-[18px] rounded-full">
        About
      </div>
      <div className="text-white text-[96px] font-bold flex flex-col justify-center items-center leading-[130px]">
        <h1>Making open-source software</h1>
        <h1>
          <span className="bg-[#ffcf27] p-1 rounded-xl text-black">safer</span>{" "}
          to explore and use
        </h1>
      </div>
    </div>
  );
};

export default AboutPage;
