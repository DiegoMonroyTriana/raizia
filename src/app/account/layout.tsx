import { Metadata } from "next";

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Raizia | Profile',
}

function Layout({ children }: Props) {
  return (
    <div className="w-full flex">
      {children}
    </div>
  )
}

export default Layout;
