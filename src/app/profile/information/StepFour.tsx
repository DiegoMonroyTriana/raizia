'use client'

import { useLabels } from "@/utils/useLabels";
import Container from "./Container";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

function StepFour() {
  const { information } = useLabels();
  const [selected, setSelected] = useState<{ [key: number]: string }>({});

  function handleSelect(value: string, index: number) {
    const newSelected = {
      [index]: value
    }
    setSelected(prev => ({ ...prev, ...newSelected }))
  }

  return (
    <Container title={information.stepsFour.title} >
      <div className="grid grid-cols-2 place-items-center gap-4 -mt-10">
        {
          information.stepsFour.content.map((item, i) => (
            <div className="flex flex-col justify-center items-center" key={item.title}>
              <Image src={item.src} alt={item.title} width={500} height={200} className="object-contain lg:mt-0 mt-5" />
              <h3 className="text-prussianBlue/70 lg:text-xl text-sm font-bold text-center">{item.title}</h3>
              <div className="flex flex-col max-w-sm">
                {item.values.map((value) => {
                  const isSelected = selected[i] === value;
                  const variant = isSelected ? 'fill' : 'outline';
                  const className = isSelected ? 'bg-prussianBlue text-white' : 'border-prussianBlue text-prussianBlue';
                  return (
                    <Button
                      key={`${item.title}-${value}`}
                      action={() => handleSelect(value, i)}
                      variant={variant}
                      className={`${className} my-1 lg:text-sm text-xs`}>{value}</Button>
                  )
                })}
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default StepFour;
