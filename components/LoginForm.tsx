'use client'

import { FormEvent, useEffect } from "react";
import useUserStore from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useLabels } from "@/utils/useLabels";
import Input from "./Input";
import Button from "./Button";
import { GoogleIcon, RaiziaLogo } from "./Icons";
import Link from "next/link";
import { Role } from "@/types/shared";

function LoginForm() {
  const { login } = useLabels();
  const { setEmail, setPassword, setRole, email, name, role } = useUserStore();
  const pathname = usePathname();
  const { push } = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const currentEmail = formData.get(login.form.email) as string;
    const currentPassword = formData.get(login.form.password) as string;

    if (name !== '' && currentEmail === email && role === Role.broker) {
      return push('/account/broker')
    }

    if (name !== '' && currentEmail === email && role === Role.client) {
      return push('/account/client')
    }

    setEmail(currentEmail);
    setPassword(currentPassword);
    push('/profile')
  }

  useEffect(() => {
    setRole(pathname.split("/")[2] as Role);
  }, [pathname, setRole])

  return (
    <div>
      <Link href={'/'}>
        <RaiziaLogo color="#0B3142" width="120" />
      </Link>
      <form onSubmit={handleSubmit} className=" flex flex-col lg:gap-8 gap-6 text-center">
        <h2 className="lg:text-6xl text-2xl font-bold mt-4 lg:mt-0 text-prussianBlue/90">{login.title}</h2>
        <h3 className="lg:text-xl text:sm text-prussianBlue/60 ">{login.subtitle}</h3>
        <Input label={login.form.email} type="email" required />
        <Input label={login.form.password} type="password" required />
        <Button type="submit" className="lg:text-base text-sm">{login.form.button}</Button>
      </form>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center my-10">
        <hr className="border-prussianBlue/60 border-[1px] ml-4" />
        <p className="text-center text-prussianBlue/60 mx-3 lg:text-base text-xs">{login.form.google}</p>
        <hr className="border-prussianBlue/60 border-[1px] mr-4" />
      </div>
      <Button variant="outline" className="border-prussianBlue w-full flex justify-center items-center">
        <GoogleIcon width="25px" color="#0B3142" />
      </Button>
    </div>
  )
}

export default LoginForm;