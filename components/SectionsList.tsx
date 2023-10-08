import { useLabels } from "@/utils/useLabels";

interface Props {
  isActive: (title: string) => boolean;
  handleChangeActive: (title: string) => () => void;
}

function SectionsList({ isActive, handleChangeActive }: Props) {
  const { sections } = useLabels();

  return (
    <div className="bg-prussianBlue lg:p-5 p-1 lg:max-w-md max-w-xs max-h-min rounded-lg">
      {sections.map(sec => (
        <button key={sec.title}
          className={`py-3 lg:my-5 my-2 pl-8 rounded-md w-full ${isActive(sec.title) ? 'bg-lightGreen' : 'bg-prussianBlue'} text-left transition-all hover:brightness-105 `}
          onClick={handleChangeActive(sec.title)}
        >
          <strong className={`${isActive(sec.title) ? 'text-prussianBlue' : 'text-lvory'} lg:text-xl text-base`}>{sec.title}</strong>
        </button>
      ))}
    </div>
  )
}

export default SectionsList
