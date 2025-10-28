import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"

const Header = () => {
  return (
    // cr shadow buttom of div with blur effect
    <div className="shadow-xl flex justify-between items-center min-h-[64px] bg-foreground sticky px-4 ">
      <h1>Job List</h1>

      <div className="flex items-center gap-2">
        <div className="border-r border-gray-300 h-10"></div>
        <Avatar className="size-6 !rounded">
          <AvatarImage src={""} className="object-cover" />
          <AvatarFallback className="rounded">N</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Header
