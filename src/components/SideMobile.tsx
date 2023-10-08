'use client'

import { useState } from "react"
import { Buttons } from "./Navigation"
import Link from "next/link"
import { RaiziaLogo } from "./Icons"

function SideMobile({ buttons }: { buttons: Buttons[] }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <>
      <nav className='xl:hidden flex z-10'>
        <button className='m-5' onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lvory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {
        open && (
          <aside className="xl:hidden fixed left-0 top-0 bottom-0 bg-white h-screen sm:w-5/12 w-1/2 z-20 flex flex-col">
            <div className="flex flex-row justify-between sm:p-8 px-2 py-4">
              <RaiziaLogo width="100" color="#000" />
              <button onClick={toggle} className="self-end ">
                <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-10 sm:w-10 w-7 h-7 text-prussianBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul>
              {buttons.map((button) => (
                <li key={button.title} className='sm:text-lg text-sm font-bold text-prussianBlue hover:bg-lightGreen/10 sm:px-8 py-5 pl-2'>
                  <Link href={button.link}>
                    {button.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )
      }
    </>
  )
}

export default SideMobile;
