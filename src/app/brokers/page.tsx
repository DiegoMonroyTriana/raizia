'use client'

import BrokerCard from "@/components/BrokerCard";
import Button from "@/components/Button";
import useUserStore from "@/store/store";
import useBrokers from "@/utils/useBrokers";
import { useLabels } from "@/utils/useLabels";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Brokers() {
  const { brokers } = useBrokers();
  const { buttons } = useLabels();
  const { push } = useRouter();
  const { setBroker, setBrokerEmail } = useUserStore();
  const [currentBroker, setCurrentBroker] = useState(brokers[0]);

  function handleNext() {
    const index = brokers.findIndex(broker => broker.name === currentBroker.name);
    if (index === brokers.length - 1) {
      return setCurrentBroker(brokers[0])
    }
    setCurrentBroker(brokers[index + 1])
  }

  function handleReturn() {
    const index = brokers.findIndex(broker => broker.name === currentBroker.name);
    if (index === 0) {
      return setCurrentBroker(brokers[brokers.length - 1])
    }
    setCurrentBroker(brokers[index - 1])
  }

  function handleAccept() {
    setBroker(currentBroker.name)
    setBrokerEmail(currentBroker.media.facebook)
    push('/profile/agreements')
  }
  return (
    <div className="w-full flex flex-col justify-center items-center relative pt-24">
      <BrokerCard broker={currentBroker} colapsed={false} />
      <button className="absolute left-16 top-72" onClick={handleReturn}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>
      <button className="absolute right-16 top-72" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
      <div className="mt-10" >
        <Button action={handleAccept} variant="fill">{buttons.next}</Button>
      </div>
    </div>
  )
}

export default Brokers;
