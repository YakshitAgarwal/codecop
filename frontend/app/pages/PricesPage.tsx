import Price from "../components/Price";

const PricesPage = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="flex justify-center items-center gap-6">
        <div>
          <Price
            icon="🌱"
            title="Quick Scan"
            price="0.1"
            subtitle="A fast first look at the repository"
            points={[
              "Scan repository structure",
              "Detect suspicious files",
              "Check common malicious patterns",
              "Basic dependency inspection",
              "Get a quick risk summary",
            ]}
          />
        </div>
        <div>
          <Price
            icon="🔍"
            title="Deep Scan"
            price="0.25"
            subtitle="A deeper investigation powered by AI agents"
            points={[
              "Everything in Quick Scan",
              "Multi-agent code analysis",
              "Analyze suspicious behavior",
              "Inspect dependencies in depth",
              "Detailed risk assessment",
            ]}
          />
        </div>
        <div>
          <Price
            icon="🛡️"
            title="Sandbox Scan"
            price="0.5"
            subtitle="Investigate how the repository behaves in isolation"
            points={[
              "Everything in Deep Scan",
              "Run in a secure sandbox",
              "Observe runtime behavior",
              "Monitor suspicious activity",
              "Full investigation report",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
