import { useLabels } from "@/utils/useLabels";
import Container from "./Container";
import MapGoogle from "@/components/MapGoogle";

function StepThree() {
  const { information } = useLabels();

  return (
    <Container title={information.stepsThree.title} >
      <MapGoogle />
    </Container>
  )
}

export default StepThree;
