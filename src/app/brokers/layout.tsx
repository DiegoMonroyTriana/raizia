import { RaiziaLogo } from "@/components/Icons"
import { useLabels } from "@/utils/useLabels"
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Raizia | Register',
}

const Layout = ({ children }: Props) => {
  const { footer } = useLabels();
  const { brokers } = useLabels();
  return (
    <section className="flex flex-col bg-gray-200 h-screen relative pt-20 ">
      <h2 className="text-4xl font-bold text-prussianBlue/80 text-center">{brokers.heading}</h2>
      {children}
      <footer className="flex flex-row w-full border-t-1 border-gray-500 absolute bottom-0 left-0 right-0 justify-between px-10 py-8 ">
        <Link href={'/'}>
          <RaiziaLogo width="100" color="gray" />
        </Link>
        <span className="text-gray-500 text-sm">{footer.watermark}</span>
      </footer>
    </section>
  )
}

export default Layout;