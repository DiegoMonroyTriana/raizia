import { useLabels } from "@/utils/useLabels";
import Container from "./Container";
import Button from "@/components/Button";
import Image from "next/image";

function StepFour() {
  const { information } = useLabels();

  return (
    <Container title={information.stepsFour.title} >
      <div className="grid grid-cols-2 place-items-center gap-4 -mt-10">
        {
          information.stepsFour.content.map((item) => (
            <div className="flex flex-col justify-center items-center" key={item.title}>
              <Image src={item.src} alt={item.title} width={500} height={200} className="object-contain" />
              <h3 className="text-prussianBlue/70 text-xl font-bold text-center">{item.title}</h3>
              <div className="flex flex-col max-w-sm">
                {item.values.map((value) => (
                  <Button key={`${item.title}-${value}`} variant="outline" className="border-prussianBlue text-prussianBlue my-1 text-sm">{value}</Button>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default StepFour;
