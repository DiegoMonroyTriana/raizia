interface Props {
  children: React.ReactNode
  title: string
}

function Container({ children, title }: Props) {
  return (
    <div className={'flex flex-col h-full pt-10'}>
      <h2 className="text-prussianBlue lg:text-5xl text-xl font-bold text-center mb-5 [text-wrap:balance]">{title}</h2>
      {children}
    </div>
  )
}

export default Container;