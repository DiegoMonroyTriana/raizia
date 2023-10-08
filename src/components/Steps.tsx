import { useLabels } from "@/utils/useLabels";
import Image from "next/image";
import Card from '@/components/Card';
import TextStep from "./TextStep";
import BrokerCard from "./BrokerCard";
import useBrokers from "@/utils/useBrokers";

function Steps() {
  const { steps } = useLabels();
  const { brokers } = useBrokers();

  const stepsList = [{
    id: steps.first.heading,
    left: (
      <Card>
        <Image src={'/step-1.png'} width={600} height={400} alt={'house'} className="object-contain rounded-lg" />
      </Card>),
    right: <TextStep orientation='left' head={steps.first.heading} title={steps.first.title} message={steps.first.message} />
  }, {
    id: steps.second.heading,
    left: <TextStep orientation='right' head={steps.second.heading} title={steps.second.title} message={steps.second.message} />,
    right: (
      <Card>
        <BrokerCard colapsed broker={brokers[0]} />
      </Card>)
  }, {
    id: steps.third.heading,
    left: (
      <Card>
        <Image src={'/step-3.png'} width={600} height={400} alt={'house'} className="object-contain rounded-lg" />
      </Card>),
    right: <TextStep orientation='left' head={steps.third.heading} title={steps.third.title} message={steps.third.message} />
  }]

  return (
    <article id="how-it-works" className="flex flex-col justify-center items-center w-full p-12 gap-10 scroll-smooth">
      <h2 className="text-5xl font-bold text-prussianBlue">{steps.title}</h2>
      <div className="flex flex-col justify-center items-center w-full mt-5">
        {stepsList.map(step => (
          <section key={step.id} className="grid grid-cols-2 place-content-center gap-x-16">
            <div>
              {step.left}
            </div>
            <div>
              {step.right}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

export default Steps;
