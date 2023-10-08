import Image from "next/image";
import Container from "./Container";
import { useLabels } from "@/utils/useLabels";

function StepTwo() {
  const { information } = useLabels();

  return (
    <Container title={information.stepsTwo.title}>
      <div className="w-full flex justify-center items-center mt-12">
        <Image src={'/step-2.webp'} alt={'step-1'} width={600} height={500} className="aspect-video object-contain" />
      </div>
    </Container>
  )
}

export default StepTwo;
