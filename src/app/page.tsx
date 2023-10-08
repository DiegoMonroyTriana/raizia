import About from "@/components/About";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import HighLights from "@/components/HighLights";

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Banner />
      <Brand />
      <Steps />
      <About />
      <HighLights />
      <Footer />
    </main>
  )
}
