import { useLabels } from "@/utils/useLabels";
import Navigation from "./Navigation";
import Button from "./Button";
import { GoogleIcon } from "./Icons";
import Image from "next/image";

function Banner() {
  const { navigation, banner } = useLabels();
  const { middleButtons, rigthButtons } = navigation;

  return (
    <section className="w-full bg-prussianBlue flex flex-col">
      <Navigation rigthButtons={rigthButtons} middleButtons={middleButtons} />
      <article className='text-center flex flex-col max-w-3xl self-center mt-16 mb-48 lg:mb-0 gap-5 z-10'>
        <h2 className="lg:text-4xl text-2xl text-lvory font-bold [text-wrap:balance]">{banner.title}</h2>
        <h3 className="lg:text-xl text:base text-lvory [text-wrap:balance]">{banner.subtitle}</h3>
      </article>
      <div className="hidden lg:flex flex-row self-center justify-center gap-12 mt-24 mb-[18rem] z-10">
        <Button href={banner.buttons[0].link} >
          {banner.buttons[0].title}
        </Button>
        <Button variant="outline">
          <div className="inline-flex items-center justify-center gap-3">
            <GoogleIcon width='16px' />
            {banner.buttons[1].title}
          </div>
        </Button>
      </div>
      <Image
        src="/background.png"
        alt="Picture of the author"
        width={1920}
        height={1080}
        className="absolute bottom-0 left-0 right-0 w-full h-full object-contain "
      />
    </section >
  )
}

export default Banner;
