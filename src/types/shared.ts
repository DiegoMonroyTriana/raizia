export enum Role {
  broker = "broker",
  client = "client",
}

export interface UserStore {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  role: Role;
  totalSteps: number;
  currentStep: number;
  selectedOption: string;
  broker: string;
  brokerEmail: string;
  setBroker: (broker: string) => void;
  setBrokerEmail: (brokerEmail: string) => void;
  setSelectOption: (selectedOption: string) => void;
  setBirthDate: (birthDate: string) => void;
  setPhone: (phone: string) => void;
  setCurrentStep: (currentStep: number) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRole: (role: Role) => void;
}

interface Certification {
  name: string;
  place: string;
}

interface Kpi {
  name: string;
  value: number;
}

interface Broker {
  name: string;
  description: string;
  image: string;
  media: {
    facebook: string;
    instagram: string;
    linkedin: string;
    website: string;
  }
  kpis: Kpi[];
  zones: string[];
  certifications: Certification[];
}

export interface BrokerCardProps {
  colapsed: boolean;
  broker: Broker;
}

type Step = {
  title: string;
  completed: boolean;
}

export interface Binnacle {
  name: string;
  title: string;
  steps: Step[];
}

export interface BinnacleStore {
  binnacle: Binnacle[];
  setBinnacle: (binnacle: Binnacle[]) => void;
}
