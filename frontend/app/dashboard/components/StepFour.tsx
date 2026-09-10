import { ChevronLeft } from "lucide-react";
import type { Scan } from "@/app/types/scan";

interface PaymentProps {
  previousStep: () => void;
  paymentSuccessful: boolean;
  setPaymentSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  scanType: Scan | "";
}

const StepFour = ({
  previousStep,
  paymentSuccessful,
  setPaymentSuccessful,
  scanType,
}: PaymentProps) => {
  let amountToPay;
  if (scanType == "quick") {
    amountToPay = 0.1;
  } else if (scanType == "deep") {
    amountToPay = 0.25;
  } else {
    amountToPay = 0.5;
  }
  return (
    <div className="flex flex-col flex-1 justify-center">
      <button
        onClick={previousStep}
        className="mx-18 mt-14 flex items-center gap-2 cursor-pointer"
      >
        <ChevronLeft />
        <h1 className="text-[20px]">Back</h1>
      </button>
      <div className="flex flex-col flex-1 justify-center items-center gap-8">
        <button className="bg-gradient-to-r from-[#8453f6] to-[#4379f6] text-white text-[30px] px-6 py-3 rounded-4xl cursor-pointer">
          Pay ${amountToPay}
        </button>
        <div className="flex flex-col justify-center items-center text-gray-500 text-[18px]">
          <p>Make sure you have enough funds in your wallet </p>
          <p>before proceeding for payment</p>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
