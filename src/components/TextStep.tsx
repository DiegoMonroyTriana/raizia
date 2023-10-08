type Orientation = 'left' | 'right';

const TextStep = ({ orientation, head, title, message }: { orientation: Orientation, head: string, title: string, message: string, }) => (
  <aside className={`flex flex-col gap-3 ${orientation === "left" ? 'text-left' : 'text-right'} h-full max-w-xl justify-center`}>
    <span className="font-extrabold text-xl text-gray-300 leading-6">{head}</span>
    <strong className="font-extrabold text-3xl text-prussianBlue">{title}</strong>
    <p className="[text-wrap:balance]">{message}</p>
  </aside>
)

export default TextStep;
