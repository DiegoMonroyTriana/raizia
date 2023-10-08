import { Role, UserStore } from '@/types/shared';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

const TOTAL_STEPS = 5;

export const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  role: Role.client,
  totalSteps: TOTAL_STEPS,
  currentStep: 1,
  phone: '',
  birthDate: '',
  selectedOption: '',
  broker: '',
  brokerEmail: '',
};

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        name: '',
        lastName: '',
        email: '',
        password: '',
        role: Role.client,
        totalSteps: TOTAL_STEPS,
        currentStep: 1,
        phone: '',
        birthDate: '',
        selectedOption: '',
        broker: '',
        brokerEmail: '',
        setBroker: (broker: string) => set({ broker }),
        setBrokerEmail: (brokerEmail: string) => set({ brokerEmail }),
        setSelectOption: (selectedOption: string) => set({ selectedOption }),
        setBirthDate: (birthDate: string) => set({ birthDate }),
        setPhone: (phone: string) => set({ phone }),
        setCurrentStep: (currentStep: number) => set({ currentStep }),
        setName: (name: string) => set({ name }),
        setLastName: (lastName: string) => set({ lastName }),
        setEmail: (email: string) => set({ email }),
        setPassword: (password: string) => set({ password }),
        setRole: (role: Role) => set({ role }),
      }),
      {
        name: 'user-storage',
        getStorage: () => localStorage,
      }
    )
  )
)

export default useUserStore;
