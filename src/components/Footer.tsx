import { useLabels } from "@/utils/useLabels";
import { RaiziaLogo } from "./Icons";
import Image from "next/image";

function Footer() {
  const { footer: footerLabels } = useLabels();
  return (
    <footer className="w-full bg-prussianBlue p-10">
      <section className="flex flex-row justify-between items-center mb-4">
        <div className="flex flex-row gap-8">
          {footerLabels.media.map(social => (
            <Image src={`/${social}.png`} alt={social} key={social} width={20} height={20} className="hover:cursor-pointer invert" />
          ))}
        </div>
        <RaiziaLogo className="text-lvory" />
      </section>
      <div className="h-[1px] bg-lvory w-full my-3" />
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-8">
          {footerLabels.links.map(link => (
            <small className="text-lvory hover:cursor-pointer" key={link}>{link}</small>
          ))}
        </div>
        <p className="text-lvory text-center text-small ">{footerLabels.watermark}</p>
      </section>
    </footer>
  );
}

export default Footer;
