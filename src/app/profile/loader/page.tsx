import { useLabels } from "@/utils/useLabels"
import Container from "../information/Container";

function Loader() {
  const { loader } = useLabels();
  return (
    <Container title={loader.title}>
      <div className="relative grid place-items-center h-full -mt-20">
        <div className="bg-prussianBlue/10 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
        <div className="bg-prussianBlue/70 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-search text-gray-900 h-16 w-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
          <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M8 11h4" />
          <path d="M8 15h3" />
          <path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
          <path d="M18.5 19.5l2.5 2.5" />
        </svg>
      </div>
    </Container>
  )
}

export default Loader;
