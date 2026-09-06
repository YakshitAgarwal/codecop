import Card from "../components/Card";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center gap-12 bg-[#f9f9f9]">
      <div className="mt-20 bg-[#ffcf27] py-2 px-4 text-[18px] rounded-full">
        Features
      </div>
      <div className="text-[60px] font-bold">Security Insights</div>
      <div className="grid grid-cols-3 gap-10 px-20">
        <Card
          icon="🔍"
          heading="AI Repository Analysis"
          detail="Analyze repositories beyond simple pattern matching."
        />
        <Card
          icon="🤖"
          heading="Multi-Agent Investigation"
          detail="Specialized AI agents investigate different parts of repo."
        />
        <Card
          icon="📦"
          heading="Dependency Analysis"
          detail="Identify suspicious and potentially risky dependencies."
        />
        <Card
          icon="📜"
          heading="Script Inspection"
          detail="Analyze installation and execution scripts."
        />
        <Card
          icon="⚠️"
          heading="Risk Scoring"
          detail="Get a clear assessment of potential security risks."
        />
        <Card
          icon="📊"
          heading="Investigation Report"
          detail="Understand what was found and why it matters."
        />
      </div>
    </div>
  );
};

export default FeaturesPage;
