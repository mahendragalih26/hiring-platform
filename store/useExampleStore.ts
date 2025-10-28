import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface ExampleState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useExampleStore = create<ExampleState>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: "ExampleStore" }
  )
)
