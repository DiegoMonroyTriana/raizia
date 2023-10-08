import { Metadata } from "next";

interface Props {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: 'Raizia | Login',
}


const Layout = ({ children }: Props) => {
  return (
    <div className="md:grid grid-cols-2 w-full flex ">
      {children}
    </div>
  )
}

export default Layout;
