import { useLabels } from "@/utils/useLabels";

interface Props {
  isActive: (title: string) => boolean;
  handleChangeActive: (title: string) => () => void;
}

function SectionsList({ isActive, handleChangeActive }: Props) {
  const { sections } = useLabels();

  return (
    <div className="bg-prussianBlue p-5 max-w-md max-h-min rounded-lg">
      {sections.map(sec => (
        <button key={sec.title}
          className={`py-3 my-5 pl-8 rounded-md w-full ${isActive(sec.title) ? 'bg-lightGreen' : 'bg-prussianBlue'} text-left transition-all hover:brightness-105 `}
          onClick={handleChangeActive(sec.title)}
        >
          <strong className={`${isActive(sec.title) ? 'text-prussianBlue' : 'text-lvory'} text-xl`}>{sec.title}</strong>
        </button>
      ))}
    </div>
  )
}

export default SectionsList
