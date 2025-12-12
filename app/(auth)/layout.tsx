import { ReactNode } from "react"
import { GradientBackground } from "@/components/organisms/auth/gradient-background"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default layout
