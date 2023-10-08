import { useLabels } from "@/utils/useLabels";
import Container from "../information/Container";
import Image from "next/image";
import Button from "@/components/Button";

function Agreements() {
  const { agreements, buttons } = useLabels();

  return (
    <Container title={agreements.title}>
      <div className="lg:grid grid-cols-[60%_auto] flex flex-col max-w-3xl mt-5 gap-9">
        <div className="flex flex-col gap-2 max-w-4xl">
          {agreements.messages.map((message) => (
            <p key={message} className="text-prussianBlue/60 lg:text-xl text-sm [text-wrap:balance]">{message}</p>
          ))}
        </div>
        <Image src={agreements.src} alt={agreements.title} width={500} height={500} className="object-contain aspect-square self-center" />
      </div>
      <div className="flex w-full justify-end h-full items-end">
        <Button href="/profile/accept" className="lg:text-base text-xs">{buttons.next}</Button>
      </div>
    </Container>
  )
}

export default Agreements;
