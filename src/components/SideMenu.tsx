'use client'

import { useLabels } from "@/utils/useLabels";
import { LogoutIcon, RaiziaLogo } from "./Icons";
import { useRouter } from "next/navigation";
import useUserStore, { initialState } from "@/store/store";
import Link from "next/link";

function SideMenu() {
  const { account } = useLabels();
  const { push } = useRouter();

  function handleLogout() {
    useUserStore.setState(initialState);
    push('/');
  }

  return (
    <aside className="hidden h-screen py-10 shadow-xl lg:flex flex-col justify-between lg:fixed w-1/6 bg-white">
      <div>
        <div className="border-b-1 border-gray-100 pb-4 pl-6">
          <Link href="/">
            <RaiziaLogo width="100" color="gray" />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col gap-4 mt-10">
            {account.sections.map(section => (
              <li key={section.name} className="flex flex-row gap-4 items-center border-r-[10px] border-lightGreen bg-lightGreen/5 py-3 pl-5 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
                <span className="text-darkGreen">{section.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer>
        <button onClick={handleLogout} className="flex flex-row gap-4 py-2 hover:bg-lightGreen/5 w-full transition-all pl-5">
          <LogoutIcon />
          {account.logout}
        </button>
        <button className="flex flex-row gap-4 py-2 hover:bg-lightGreen/5 w-full transition-all pl-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-progress-help" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 16v.01" />
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
            <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
            <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
            <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
            <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
          </svg>
          {account.help}
        </button>
      </footer>
    </aside>
  )
}

export default SideMenu;
