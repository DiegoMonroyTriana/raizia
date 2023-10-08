'use client'

import Image from "next/image";
import Container from "./Container";
import { useLabels } from "@/utils/useLabels";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

function StepFive() {
  const { information } = useLabels();
  const [selected, setSelected] = useState<string>();

  function handleSelect(value: string) {
    setSelected(value)
  }

  return (
    <Container title={information.stepsFive.title} >
      <Image
        src={information.stepsFive.src}
        alt={information.stepsFive.title}
        width={1000}
        height={200}
        className="object-contain relative top-0 left-0 right-0 h-40" />
      <div className="grid grid-cols-2 gap-5 place-items-center mt-5 lg:mt-1">
        {information.stepsFive.content.map((item) => (
          <div key={item.title}>
            <h3 className="text-prussianBlue/70 lg:text-xl text-sm font-bold text-center mb-4">{item.title}</h3>
            <div className="flex flex-col gap-2 max-w-xs justify-center ">
              {item.type === 'button' && item.values.map((value) => {
                const isSelected = selected === value;
                const variant = isSelected ? 'fill' : 'outline';
                const className = isSelected ? 'bg-prussianBlue text-white' : 'border-prussianBlue text-prussianBlue';
                return (
                  <Button
                    action={() => handleSelect(value)}
                    key={`${item.title}-${value}`}
                    variant={variant}
                    className={`${className} lg:text-sm text-xs`} >{value}</Button>
                )
              })}
              {item.type === 'range' && item.values.map((value) => (
                <div key={`${item.title}-${value}`} className="flex flex-row justify-between items-center">
                  <Input label={value} type="number" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default StepFive;
