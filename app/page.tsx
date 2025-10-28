import Image from "next/image"
import { DemoCounter } from "./components/DemoCounter"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 py-16 px-8 max-w-4xl w-full">
        <div className="flex flex-col items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={40}
            priority
          />
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Hiring Platform
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center">
            Built with Next.js, TypeScript, Tailwind, Zustand, TanStack Query,
            Playwright & Firebase
          </p>
        </div>

        <DemoCounter />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Tech Stack
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Next.js 16 with App Router</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS v4</li>
              <li>✓ Zustand (State Management)</li>
              <li>✓ TanStack Query (Data Fetching)</li>
              <li>✓ Zod (Schema Validation)</li>
              <li>✓ Playwright (E2E Testing)</li>
              <li>✓ Firebase Integration</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Project Structure
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  lib/
                </code>{" "}
                - Utilities & Firebase config
              </li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  store/
                </code>{" "}
                - Zustand stores
              </li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  providers/
                </code>{" "}
                - React providers
              </li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  app/
                </code>{" "}
                - Next.js app directory
              </li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  e2e/
                </code>{" "}
                - Playwright tests
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
