import { useLabels } from "@/utils/useLabels"

function Brand() {
  const { brand } = useLabels();
  return (
    <article className="bg-gray-200 w-full py-14 flex justify-center">
      <section className="max-w-2xl text-center">
        <h3 className="lg:text-xl text-sm text-gray-900 [text-wrap:balance]">{brand.message}</h3>
      </section>
    </article>
  )
}

export default Brand;
