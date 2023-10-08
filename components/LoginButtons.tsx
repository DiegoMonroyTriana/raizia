'use client'

import useUserStore, { initialState } from "@/store/store";
import Button from "./Button";
import { Buttons } from "./Navigation";
import { LogoutIcon } from "./Icons";
import { Role } from "@/types/shared";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLabels } from "@/utils/useLabels";

function LoginButtons({ rigthButtons }: { rigthButtons: Buttons[] }) {
  const { name, email, lastName, role } = useUserStore();
  const { account } = useLabels();
  const isLogged = name !== '' && email !== '' && lastName !== '';
  const [route, setRoute] = useState<string>('');

  function logout() {
    useUserStore.setState(initialState)
  }

  useEffect(() => {
    if (role === Role.broker) {
      return setRoute('/account/broker')
    }
    if (role === Role.client) {
      return setRoute('/account/client')
    }
  }, [role]);

  if (isLogged) {
    return (
      <div className="flex xl:flex-row flex-col gap-5 w-full justify-end pr-10 xl:items-center pl-10 pt-4 items-start">
        <Link href={route} className="text-lvory font-bold text-lg hidden xl:flex">
          {name} {lastName}
        </Link>
        <Link href={route} className="text-prussianBlue font-bold sm:text-lg text-sm flex xl:hidden">
          {account.profile}
        </Link>
        <button onClick={logout} className="flex justify-center items-center">
          <span className="flex xl:hidden text-prussianBlue font-bold gap-5 sm:text-lg text-sm">
            {account.logout}
            <LogoutIcon color="#000" />
          </span>
          <LogoutIcon />
        </button>
      </div>
    )
  }

  return (
    <ul className='flex flex-row gap-3 items-center justify-end'>
      {rigthButtons.map((button, i) => (
        <Button key={button.link} href={button.link} variant={i === 0 ? 'outline' : 'fill'}>
          {button.title}
        </Button>
      ))}
    </ul>
  )
}

export default LoginButtons;
