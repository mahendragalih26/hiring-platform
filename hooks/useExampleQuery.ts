"use client"

import { useQuery } from "@tanstack/react-query"

interface ExampleData {
  message: string
  timestamp: string
}

async function fetchExampleData(): Promise<ExampleData> {
  const response = await fetch("/api/example")
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}

export function useExampleQuery() {
  return useQuery({
    queryKey: ["example"],
    queryFn: fetchExampleData,
  })
}
