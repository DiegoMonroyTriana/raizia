'use client'

import Input from "@/components/Input";
import useUserStore from "@/store/store";
import { useLabels } from "@/utils/useLabels";
import { Role } from "@/types/shared";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

function Profile() {
  const { profile } = useLabels();
  const { setName, setLastName, setBirthDate, setPhone, role, setCurrentStep } = useUserStore();
  const { push } = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get(profile.name) as string;
    const lastName = formData.get(profile.lastname) as string;
    const birthday = formData.get(profile.labelBirthday) as string;
    const phone = formData.get(profile.phone) as string;
    setName(name);
    setLastName(lastName);
    setBirthDate(birthday);
    setPhone(phone);
    if (role === Role.broker) {
      push('/account/broker')
    }
    if (role === Role.client) {
      setCurrentStep(2)
      push('/profile/information/1')
    }
  }

  useEffect(() => {
    setCurrentStep(1)
  }, [setCurrentStep]);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:w-10/12  justify-start h-full py-10 lg:px-8 px-0">
      <h2 className="text-2xl font-bold text-center mb-10">{profile.title}</h2>
      <div className="flex flex-col gap-4 mb-10">
        <h3>{profile.labelName}<small className="text-red-400">*</small></h3>
        <div className="flex flex-row gap-3">
          <Input label={profile.name} type="text" required />
          <Input label={profile.lastname} type="text" required />
        </div>
      </div>
      <div className="flex flex-col items-cener justify-center mb-10">
        <div className="mb-10 w-1/3">
          <Input label={profile.labelBirthday} type="date" required />
        </div>
        <div className="flex flex-col gap-3">
          <h3>{profile.labelPhone}<small className="text-red-400">*</small></h3>
          <Input label={profile.phone} type="tel" required />
        </div>
      </div>
      <button
        type="submit"
        className="w-fit self-center border-1 border-lightGreen px-4 py-2 rounded-md lg:text-xl text-sm hover:bg-lightGreen/75 transition-all">
        {profile.validate}
      </button>
    </form>
  );
}

export default Profile;
