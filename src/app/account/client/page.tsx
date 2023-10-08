'use client'

import { CheckIcon, WaitIcon, CircleIcon, RaiziaLogo } from "@/components/Icons";
import useBinnacleStore from "@/store/binnacleStore";
import { Binnacle as BinnacleType } from "@/types/shared";
import useBinnacle from "@/utils/useBinnacle";
import { useLabels } from "@/utils/useLabels";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Steps = {
  title: string;
  completed: boolean;
}

function Binnacle() {
  const { binnacle } = useLabels();
  const { setBinnacle, binnacle: binnacleData } = useBinnacleStore();
  const data = useBinnacle();
  const [currentStage, setCurrentStage] = useState<BinnacleType>();
  const [currentLabels, setCurrentLabels] = useState(binnacle.info[0]);

  const handleChangeStage = (stage: BinnacleType) => () => {
    const newLabels = binnacle.info.find((info) => info.title === stage.title) as typeof currentLabels;
    setCurrentLabels(newLabels);
    setCurrentStage(stage);
  }

  const getIcon = (stages: Steps[], color: string) => {
    const isCompleted = stages.every((stage) => stage.completed);
    const isPending = stages.some((stage) => stage.completed);
    if (isCompleted) return <CheckIcon width="24px" color={color} />
    if (isPending) return <WaitIcon width="24px" color={color} />
    return <CircleIcon width="24px" color={color} />
  }

  function updateStatus(step: string) {
    const newBinnacle = binnacleData.map((stage) => {
      if (stage.title === currentStage?.title) {
        const newSteps = stage.steps.map((s) => {
          if (s.title === step) {
            return {
              ...s,
              completed: true
            }
          }
          return s;
        })
        return {
          ...stage,
          steps: newSteps
        }
      }
      return stage;
    })
    setBinnacle(newBinnacle);
    const newStage = newBinnacle.find((stage) => stage.title === currentStage?.title) as BinnacleType;
    setCurrentStage(newStage);
    setCurrentLabels(binnacle.info.find((info) => info.title === newStage.title) as typeof currentLabels);
  }

  useEffect(() => {
    if (!binnacleData.length) {
      setBinnacle(data.binnacle);
      setCurrentStage(data.binnacle[0]);
    }

  }, [data, setBinnacle])

  return (
    <article className="lg:grid grid-cols-[65%_auto] flex flex-col w-full h-screen">
      <section className="flex flex-col p-8 relative">
        <Link href="/">
          <RaiziaLogo color="gray" width="150" />
        </Link>
        <div className="bg-prussianBlue absolute lg:top-32 top-24 left-0 pl-8 py-4 pr-10">
          <h2 className="text-3xl text-white font-semibold">{currentStage?.title}</h2>
          <small className="text-lg text-white">{binnacle.subtitle}</small>
        </div>
        <div className="lg:grid grid-cols-[63%_auto] lg:mt-48 mt-32 gap-8">
          <div className="flex flex-col gap-10">
            {currentLabels.steps.map((step) => (
              <div key={step.title} className="flex flex-col gap-2 [text-wrap:balance]">
                <h2 className="text-prussianBlue font-bold">{step.title}</h2>
                {step.messages.map((message) => (
                  <p key={message} className="text-prussianBlue/70">{message}</p>
                ))}
              </div>
            ))}
          </div>
          <Image src={currentLabels.image} alt={currentLabels.title} width="1920" height="1080" className="hidden lg:flex aspect-auto object-cover scale-150" />
        </div>
        <footer className="lg:absolute flex mt-2 bottom-5 left-8">
          <div className="max-w-xl flex flex-col gap-5 justify-start">
            <p className="text-prussianBlue/70 [text-wrap:balance]">{binnacle.footer.text}</p>
            <button className="w-fit border-2 border-prussianBlue text-prussianBlue uppercase py-2 px-2 rounded-md">{binnacle.footer.button}</button>
          </div>
        </footer>
      </section>
      <section className="bg-prussianBlue/5 flex flex-col lg:pt-32 py-5 px-10 gap-10">
        <h2 className="text-3xl text-prussianBlue font-bold uppercase">{binnacle.title}</h2>
        <div className="flex flex-col gap-4 w-full">
          {binnacleData.map((stage) => (
            <div key={stage.title} className="flex flex-col gap-4 transition-all">
              <button
                onClick={handleChangeStage(stage)}
                className="border-2 border-prussianBlue w-full text-left p-3 rounded-md">
                <div className="flex flex-row gap-2">
                  {getIcon(stage.steps, '#0B3142')}
                  <span>
                    {stage.name}: {stage.title}
                  </span>
                </div>
              </button>
              {currentStage?.steps.map((step) => (
                <div
                  key={step.title}
                  className={`${currentStage.title === stage.title ? 'flex' : 'hidden'}
                  justify-between items-center border-2 border-[#6f9e88]
                  text-[#6f9e88] w-10/12 self-end p-2 rounded-md`}
                >
                  <div className="flex flex-row gap-2 items-center">
                    {getIcon([step], '#6f9e88')}
                    <span>{step.title}</span>
                  </div>
                  <button
                    onClick={() => updateStatus(step.title)}
                    className="bg-[#6f9e88] text-white font-bold px-2 py-1 rounded-md self-end">
                    {binnacle.finish}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

export default Binnacle;
