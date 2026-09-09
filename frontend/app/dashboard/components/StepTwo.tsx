interface VerificationProps {
  nextStep: () => void;
  previousStep: () => void;
}

const StepTwo = ({ nextStep, previousStep }: VerificationProps) => {
  return (
    <div>
      <h1>StepTwo</h1>
    </div>
  );
};

export default StepTwo;
