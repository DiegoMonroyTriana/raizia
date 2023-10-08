'use client'

import { useLabels } from "@/utils/useLabels";
import Image from "next/image";
import Container from "./Container";
import useUserStore from "@/store/store";

const StepOne = () => {
  const { information } = useLabels();
  const { selectedOption, setSelectOption } = useUserStore();

  return (
    <Container title={information.stepsOne.title}>
      <div className="grid lg:grid-cols-3 grid-cols-2 w-full gap-5 lg:mt-24 mt-5">
        {information.stepsOne.content.map((item) => (
          <Image
            onClick={() => setSelectOption(item.title)}
            key={item.title}
            src={item.src}
            width={300}
            height={300}
            alt={item.title}
            className={`aspect-square object-contain hover:scale-105 transition-all
             ${selectedOption === item.title ? 'grayscale-0' : ''} grayscale hover:grayscale-0`}
          />
        ))}
      </div>
    </Container>
  )
}

export default StepOne;