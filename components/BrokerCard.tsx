import { BrokerCardProps } from "@/types/shared";
import { randomColor } from "@/utils/color";
import { useLabels } from "@/utils/useLabels";
import Image from "next/image";

function BrokerCard({ colapsed = false, broker }: BrokerCardProps) {
  const { brokers: brokerText } = useLabels();
  if (colapsed) {
    return (
      <article className="flex flex-col gap-5 max-w-md bg-white p-5" >
        <section className="flex flex-row gap-5 items-center">
          <div className="rounded-full">
            <Image src={broker.image} alt={broker.name} width={250} height={250} className="object-contain rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="[text-wrap:balance] text-xl text-left font-semibold">{broker.name}</h3>
            <p className="[text-wrap:balance] text-base text-left">{broker.description}</p>
          </div>
        </section>
        <div className="h-[0.5px] bg-gray-600 rounded-full " />
        <strong className="text-base">{brokerText.zone}</strong>
        <div className="flex flex-row w-full justify-around">
          {broker.zones.slice(0, 3).map((zone, i) => (
            <p key={zone} className={`bg-${randomColor({ index: i })} py-2 px-4 rounded-full text-white font-bold text-sm`}>{zone}</p>
          ))}
        </div>
        <div className="h-[0.5px] bg-gray-600 rounded-full " />
        <ul className="flex flex-col justify-between">
          {Object.entries(broker.media).map(([key, value]) => (
            <li key={key} className="flex flex-row justify-start items-center gap-5">
              <Image src={`/${key}.png`} alt={key} width={20} height={20} className="w-4 aspect-square h-4 object-cover scale-125" />
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
  return (
    <div className="lg:w-9/12 w-full px-2">
      <article className="lg:grid grid-cols-[50%_30%_auto] gap-5 flex flex-col">
        <section className="flex flex-row gap-5 lg:shadow-md rounded-md p-5 justify-center items-center bg-white">
          <div className="rounded-full">
            <Image src={broker.image} alt={broker.name} width={250} height={250} className="object-contain rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="[text-wrap:balance] text-xl text-left font-semibold">{broker.name}</h3>
            <p className="[text-wrap:balance] text-base text-left">{broker.description}</p>
          </div>
        </section>
        <section className="flex flex-col h-full justify-between gap-3 max-w-sm">
          {broker.kpis.map(kpi => (
            <div key={kpi.name} className="flex flex-row p-5 lg:shadow-md items-center gap-5 w-full rounded-md bg-white">
              <strong className="text-2xl font-bold">{kpi.value}</strong>
              <h3 className="text-xl text-left [text-wrap:balance]">{kpi.name}</h3>
            </div>
          ))}
        </section>
        <ul className="flex flex-col lg:shadow-md rounded-md p-5 lg:gap-0 gap-2 justify-between bg-white">
          {Object.entries(broker.media).map(([key, value]) => (
            <li key={key} className="flex flex-row justify-start items-center gap-5">
              <Image src={`/${key}.png`} alt={key} width={20} height={20} className="w-4 aspect-square h-4 object-cover scale-125" />
              <p className="text-sm">{value}</p>
            </li>
          ))}
        </ul>
      </article>
      <article className="flex flex-col gap-5 lg:shadow-md rounded-md p-5 w-full mt-8 bg-white">
        <strong className="lg:text-xl text-base">{brokerText.zone}</strong>
        <div className="flex flex-row w-full justify-around">
          {broker.zones.map((zone, i) => (
            <p
              key={zone}
              className={`bg-prussianBlue/60 lg:py-2 lg:px-4 text-center px-[2px] lg:text-base text-[10px] rounded-full text-white font-bold`}>
              {zone}
            </p>
          ))}
        </div>
        <div className="h-[0.5px] bg-gray-600 rounded-full lg:my-5" />
        <div className="flex flex-col gap-4">
          {broker.certifications.map(certification => (
            <div key={certification.name} className="flex flex-row gap-4 justify-start items-center">
              <Image src="/certification.png" alt="certification" width={50} height={50} className="w-8 aspect-square h-8 object-cover scale-125" />
              <div className="flex flex-col">
                <p className="lg:text-xl text-sm font-medium">{certification.name}</p>
                <p className="lg:text-sm text-xs">{certification.place}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default BrokerCard;
