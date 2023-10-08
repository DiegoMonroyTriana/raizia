'use client'

import { useLabels } from "@/utils/useLabels";
import Container from "../information/Container";
import Image from "next/image";
import Button from "@/components/Button";
import useUserStore from "@/store/store";

function Accept() {
  const { accept } = useLabels();
  const { broker, brokerEmail } = useUserStore();

  return (
    <Container title={accept.title}>
      <div className="flex flex-col gap-2 max-w-4xl text-center">
        {accept.messages.map((message) => {
          const text = message.replace(/replaceName/, broker)
          return (
            <p key={message} className="text-prussianBlue/60 text-xl [text-wrap:balance]">{text}</p>
          )
        })}
      </div>
      <div className="grid grid-cols-[60%_auto] max-w-3xl mt-5 gap-9 place-content-center place-items-center">
        <Image src={accept.src} alt={accept.title} width={400} height={400} className="object-contain aspect-square self-center" />
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-prussianBlue/60 ">{accept.contact.phone}</h3>
            <strong >55 0000 0000</strong>
          </div>
          <div>
            <h3 className="text-prussianBlue/60  ">{accept.contact.email}</h3>
            <strong>{`${brokerEmail}@gmail.com`}</strong>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end h-full items-end">
        <Button href="/account/client">{accept.binnacle}</Button>
      </div>
    </Container>
  )
}

export default Accept;
