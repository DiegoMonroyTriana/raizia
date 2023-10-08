interface Props {
  children: React.ReactNode
  title: string
}

function Container({ children, title }: Props) {
  return (
    <div className={'flex flex-col h-full pt-10'}>
      <h2 className="text-prussianBlue text-5xl font-bold text-center mb-5">{title}</h2>
      {children}
    </div>
  )
}

export default Container;