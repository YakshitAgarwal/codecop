interface VerificationProps {
  nextStep: () => void;
  previousStep: () => void;
}

const StepTwo = ({ nextStep, previousStep }: VerificationProps) => {
  return (
    <div>
      <h1>StepTwo</h1>
      <button onClick={nextStep}>Next</button>
      <button onClick={previousStep}>Back</button>
    </div>
  );
};

export default StepTwo;
