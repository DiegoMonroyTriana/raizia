type Orientation = 'left' | 'right';

const TextStep = ({ orientation, head, title, message }: { orientation: Orientation, head: string, title: string, message: string, }) => (
  <aside className={`flex flex-col gap-3 ${orientation === "left" ? 'text-left' : 'lg:text-right text-left'} h-full max-w-xl justify-center`}>
    <span className="font-extrabold lg:text-xl text-base text-gray-300 leading-6">{head}</span>
    <strong className="font-extrabold lg:text-3xl text-xl text-prussianBlue">{title}</strong>
    <p className="[text-wrap:balance] text-sm lg:text-base">{message}</p>
  </aside>
)

export default TextStep;
