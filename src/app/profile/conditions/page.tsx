import { useLabels } from "@/utils/useLabels";
import Container from "../information/Container";
import Image from "next/image";

function Conditions() {
  const { conditions } = useLabels();
  return (
    <Container title={conditions.title}>
      <Image src={conditions.src} alt={conditions.title} width={200} height={200} className="object-contain aspect-square self-center" />
      <div className="flex flex-col gap-2 max-w-4xl">
        {conditions.messages.map((message) => (
          <p key={message} className="text-prussianBlue/70 text-base [text-wrap:balance] mb-3">{message}</p>
        ))}
      </div>
    </Container>
  )
}

export default Conditions;
