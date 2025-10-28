import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TanStackQueryProvider } from "@/providers/TanStackQueryProvider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hiring Platform",
  description: "Hiring management platform built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanStackQueryProvider>{children}</TanStackQueryProvider>
      </body>
    </html>
  )
}
