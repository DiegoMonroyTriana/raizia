'use client'

import useUserStore from "@/store/store";
import { useLabels } from "@/utils/useLabels";
import Image from "next/image";

function Header() {
  const { name, lastName } = useUserStore();
  const date = new Date();
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const day = date.toLocaleString('es-ES', { day: 'numeric' });
  const qualification = Math.floor(Math.random() * 5) + 1;
  const { account } = useLabels();

  return (
    <header className="w-full bg-white py-4 px-6 grid grid-cols-[25%_auto_20%] shadow-lg rounded-md">
      <div className="flex flex-row gap-4 border-r-2 border-gray-200 justify-left items-center">
        <Image src={'/placeholder.webp'} width={60} height={60} alt={'avatar'} className="rounded-full" />
        <div>
          <h2 className="font-semibold text-gray-600">{`${name} ${lastName}`}</h2>
          <span className="text-sm text-gray-400">{account.edit}</span>
        </div>
      </div>
      <div className="flex flex-row gap-24 pl-10 items-center">
        <div className="flex flex-row justify-center items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M11 15h1" />
            <path d="M12 15v3" />
          </svg>
          <strong className="capitalize">
            {day} {month}
          </strong>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row gap-2">
            {Array.from(Array(qualification).keys()).map((_) => (
              <svg key={_} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" />
              </svg>
            ))}
          </div>
          <small className="text-gray-400">{account.helper.qualification}: {qualification}</small>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <h2 className="font-bold text-gray-700">{account.helper.activeProfile}</h2>
      </div>
    </header>
  )
}

export default Header;
