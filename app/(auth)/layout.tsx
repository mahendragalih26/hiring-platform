// import Header from "@/components/molecules/header"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
    </div>
  )
}

export default layout
