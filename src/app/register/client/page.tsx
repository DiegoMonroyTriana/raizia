import LoginForm from "@/components/LoginForm";
import { useLabels } from "@/utils/useLabels";
import Image from "next/image";

export default function BrokerRegister() {
  const { login } = useLabels();
  return (
    <>
      <div className="p-10">
        <LoginForm />
      </div>
      <section className="w-full h-screen bg-prussianBlue md:flex flex-col text-center justify-center items-center hidden">
        <h2 className="text-4xl text-lvory [text-wrap:balance]">{login.message}</h2>
        <Image src="/login.png" width={1000} height={1000} alt='login' />
      </section>
    </>
  )
}