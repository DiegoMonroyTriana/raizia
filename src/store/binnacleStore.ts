import { Binnacle, BinnacleStore } from '@/types/shared';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

const useBinnacleStore = create<BinnacleStore>()(
  devtools(
    persist(
      (set, get) => ({
        binnacle: [],
        setBinnacle: (binnacle: Binnacle[]) => set({ binnacle: binnacle }),
      }),
      {
        name: 'binnacle-storage',
        getStorage: () => localStorage,
      }
    )
  )
)

export default useBinnacleStore;
