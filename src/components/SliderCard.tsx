'use client'

import useUserStore from "@/store/store";
import Button from "./Button";
import { useLabels } from "@/utils/useLabels";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode
}

const INFORMATION_PATH = '/profile/information';
const CONDITIONS_PATH = '/profile/conditions';
const LOADER_PATH = '/profile/loader';
const BROKERS_PATH = '/brokers';

function SliderCard({ children }: Props) {
  const { totalSteps, currentStep, setCurrentStep } = useUserStore();
  const { buttons } = useLabels();
  const pathname = usePathname();
  const isLoader = pathname === LOADER_PATH;
  const isInformation = pathname.includes(INFORMATION_PATH) || pathname === CONDITIONS_PATH;
  const isCondition = pathname === CONDITIONS_PATH;

  const { push } = useRouter();
  function handleNext() {
    if (isCondition) {
      return push(BROKERS_PATH)
    }

    if (currentStep === totalSteps) {
      return push(LOADER_PATH)
    }
    if (currentStep === 1) {
      return push(INFORMATION_PATH)
    }
    if (currentStep !== totalSteps) {
      setCurrentStep(currentStep + 1)
      return push(`${INFORMATION_PATH}/${currentStep + 1}`)
    }
  }

  function handleReturn() {
    if (isCondition) {
      return push('/')
    }

    if (currentStep === 1) {
      return push('/')
    }
    setCurrentStep(currentStep - 1)
    return push(`${INFORMATION_PATH}/${currentStep - 1}`)
  }

  useEffect(() => {
    if (isLoader) {
      setTimeout(() => {
        push(CONDITIONS_PATH)
      }, 3000)
    }
  }, [isLoader, push])

  return (
    <article className="flex flex-col justify-center items-center bg-white lg:aspect-video lg:w-4/6 w-full md:h-fit h-full rounded-lg shadow-lg p-8 relative">
      {children}
      <div className="flex flex-row absolute bottom-10 gap-2 justify-center items-center">
        {
          isInformation ? (
            <>
              <Button
                action={handleReturn}
                variant="outline"
                className={`border-prussianBlue border-1 text-prussianBlue lg:mr-10 lg:text-base text-xs`}>
                {buttons.return}
              </Button>
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
                return (
                  <div
                    key={step}
                    className={`lg:w-4 lg:h-4 w-2 h-2 rounded-full mx-2 ${currentStep === step ? 'bg-prussianBlue' : 'bg-gray-200'} ${isCondition ? 'bg-transparent' : ''}`}
                  />
                )
              })}
              <Button
                action={handleNext}
                variant="fill" className="lg:ml-10 lg:text-base text-xs">
                {buttons.next}
              </Button>
            </>
          ) : null
        }

      </div>
    </article>
  )
}

export default SliderCard;
