import { useLabels } from "@/utils/useLabels";
import Button from "./Button";

function HighLights() {
  const { highlights } = useLabels();
  return (
    <article className="flex flex-col gap-14 justify-center items-center py-16 text-center w-full">
      <h2 className="lg:text-3xl text-xl font-bold text-prussianBlue [text-wrap:balance]">{highlights.title}</h2>
      <section className="grid grid-cols-3 gap-6 p-4 bg-prussianBlue/5 rounded-lg border-1 border-prussianBlue">
        {highlights.kpis.map((kpi) => (
          <div key={kpi.value} className="flex flex-col">
            <strong className="lg:text-5xl text-2xl font-bold text-prussianBlue">{kpi.value}</strong>
            <h3 className="lg:text-xl text-sm text-prussianBlue">{kpi.text}</h3>
          </div>
        ))}
      </section>
      <p className="[text-wrap:balance] lg:text-lg text-sm">{highlights.subtitle}</p>
      <div className="flex flex-row gap-6 justify-center items-center">
        {highlights.buttons.map((highlight, i) => (
          <Button
            href={highlight.link}
            key={highlight.title}
            variant={i === 0 ? 'fill' : 'outline'}
            className={`${i === 0 ? 'bg-prussianBlue border-prussianBlue text-white'
              : 'bg-white border-prussianBlue text-prussianBlue'} text-xs lg:text-base`}
          >
            {highlight.title}
          </Button>
        ))}
      </div>
    </article>
  )
}

export default HighLights;