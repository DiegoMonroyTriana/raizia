import { useLabels } from "@/utils/useLabels";
import Button from "./Button";

function HighLights() {
  const { highlights } = useLabels();
  return (
    <article className="flex flex-col gap-14 justify-center items-center py-16 text-center w-full">
      <h2 className="text-3xl font-bold text-prussianBlue [text-wrap:balance]">{highlights.title}</h2>
      <section className="grid grid-cols-3 gap-6 p-4 bg-prussianBlue/5 rounded-lg border-1 border-prussianBlue">
        {highlights.kpis.map((kpi) => (
          <div key={kpi.value} className="flex flex-col">
            <strong className="text-5xl font-bold text-prussianBlue">{kpi.value}</strong>
            <h3 className="text-xl text-prussianBlue">{kpi.text}</h3>
          </div>
        ))}
      </section>
      <p className="[text-wrap:balance] text-lg">{highlights.subtitle}</p>
      <div className="flex flex-row gap-6 justify-center items-center">
        {highlights.buttons.map((highlight, i) => (
          <Button
            href={highlight.link}
            key={highlight.title}
            variant={i === 0 ? 'fill' : 'outline'}
            className={i === 0 ? 'bg-prussianBlue border-prussianBlue text-white'
              : 'bg-white border-prussianBlue text-prussianBlue'}
          >
            {highlight.title}
          </Button>
        ))}
      </div>
    </article>
  )
}

export default HighLights;