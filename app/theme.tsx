"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Image
      onClick={changeTheme}
      src={theme == "light" ? "/light.svg" : "/dark.svg"}
      alt="Vercel Logo"
      className="h-[30px] w-[30px] dark:invert"
      width={30}
      height={30}
      priority
    />
  )
}
