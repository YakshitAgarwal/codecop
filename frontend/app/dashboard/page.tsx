"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { useState } from "react";
import type { Scan } from "../types/scan";

const Dashboard = () => {
  const [step, setStep] = useState(1);

  const [githubLink, setGithubLink] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [scanType, setScanType] = useState<Scan | "">("");
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const previousStep = () => {
    setStep((currentStep) => currentStep - 1);
  };
  return (
    <div className="min-h-screen px-50 pt-4 pb-8 flex flex-col">
      <Header />
      <main className="flex flex-1">
        {step === 1 && (
          <StepOne
            githubLink={githubLink}
            setGithubLink={setGithubLink}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepTwo nextStep={nextStep} previousStep={previousStep} />
        )}

        {step === 3 && (
          <StepThree
            nextStep={nextStep}
            previousStep={previousStep}
            scanType={scanType}
            setScanType={setScanType}
          />
        )}

        {step === 4 && (
          <StepFour
            previousStep={previousStep}
            paymentSuccessful={paymentSuccessful}
            setPaymentSuccessful={setPaymentSuccessful}
            scanType={scanType}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
