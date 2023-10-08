'use client'

import { useLabels } from "@/utils/useLabels";
import Information from "./Information";
import { useState } from "react";
import SectionsList from "./SectionsList";

function About() {
  const { about } = useLabels();
  const { sections } = useLabels();
  const [active, setActive] = useState(sections[0].title)
  const isActive = (title: string) => active === title
  const accordion = sections.find(sec => sec.title === active)?.accordion

  const handleChangeActive = (title: string) => () => {
    setActive(title)
  }
  return (
    <article id='safe' className="bg-prussianBlue/5 text-center flex justify-center items-center py-10">
      <div className="text-center w-8/12">
        <h2 className="text-5xl font-bold text-prussianBlue">{about.title}</h2>
        <div className="grid grid-cols-[30%_auto] w-full mt-10 gap-9">
          <SectionsList handleChangeActive={handleChangeActive} isActive={isActive} />
          <Information accordion={accordion} />
        </div>
      </div>
    </article>
  )
}

export default About;
