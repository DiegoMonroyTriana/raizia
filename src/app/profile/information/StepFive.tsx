import Image from "next/image";
import Container from "./Container";
import { useLabels } from "@/utils/useLabels";
import Button from "@/components/Button";

function StepFive() {
  const { information } = useLabels();

  return (
    <Container title={information.stepsFive.title} >
      <Image src={information.stepsFive.src} alt={information.stepsFive.title} width={1000} height={200} className="object-contain relative top-0 left-0 right-0" />
      <div className="grid grid-cols-2 gap-5 place-items-center mt-5 lg:mt-1">
        {information.stepsFive.content.map((item) => (
          <div key={item.title}>
            <h3 className="text-prussianBlue/70 lg:text-xl text-sm font-bold text-center mb-4">{item.title}</h3>
            <div className="flex flex-col gap-2 max-w-xs justify-center ">
              {item.values.map((value) => (
                <Button
                  key={`${item.title}-${value}`}
                  variant="outline"
                  className="text-prussianBlue lg:text-sm text-xs border-prussianBlue">{value}</Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default StepFive;
