import ScanType from "./ScanType";
import React from "react";
import { ChevronLeft } from "lucide-react";
import type { Scan } from "@/app/types/scan";

interface ScanProps {
  nextStep: () => void;
  previousStep: () => void;
  scanType: Scan | "";
  setScanType: React.Dispatch<React.SetStateAction<Scan | "">>;
}

const StepThree = ({
  nextStep,
  previousStep,
  scanType,
  setScanType,
}: ScanProps) => {
  const handleScanSelect = (selectedScan: Scan) => {
    setScanType(selectedScan);
    nextStep();
  };

  return (
    <div className="flex flex-col flex-1 justify-center gap-24">
      <button
        onClick={previousStep}
        className="mx-18 flex items-center gap-2 cursor-pointer"
      >
        <ChevronLeft />
        <h1 className="text-[20px]">Back</h1>
      </button>
      <div className="flex justify-center items-center gap-6">
        <div>
          <ScanType
            icon="🌱"
            title="Quick Scan"
            price="0.1"
            subtitle="A fast first look at the repository"
            selected={scanType === "quick"}
            onSelect={() => handleScanSelect("quick")}
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
          <ScanType
            icon="🔍"
            title="Deep Scan"
            price="0.25"
            subtitle="A deeper investigation powered by AI agents"
            selected={scanType === "deep"}
            onSelect={() => handleScanSelect("deep")}
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
          <ScanType
            icon="🛡️"
            title="Sandbox Scan"
            price="0.5"
            subtitle="Investigate how the repository behaves in isolation"
            selected={scanType === "sandbox"}
            onSelect={() => handleScanSelect("sandbox")}
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

export default StepThree;
