"use client"

import { useExampleStore } from "@/store/useExampleStore"

export function DemoCounter() {
  const { count, increment, decrement, reset } = useExampleStore()

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Zustand Counter Demo
      </h2>
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        {count}
      </div>
      <div className="flex gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          aria-label="Increment"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          aria-label="Decrement"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          aria-label="Reset"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
