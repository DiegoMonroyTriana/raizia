import StepFive from "../StepFive";
import StepFour from "../StepFour";
import StepOne from "../StepOne";
import StepThree from "../StepThree";
import StepTwo from "../StepTwo";

function StepPage({ params: { id } }: { params: { id: number } }) {
  const steps = [
    <StepOne key={'step-1'} />,
    <StepTwo key={'step-2'} />,
    <StepThree key={'step-3'} />,
    <StepFour key={'step-4'} />,
    <StepFive key={'step-5'} />
  ]
  return steps[id - 1]
}

export default StepPage;
