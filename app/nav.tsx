import Link from "next/link"
import ThemeButton from "./theme"
import Image from "next/image"

export default function NavBar() {
  return (
    <div className="mb-8 flex max-w-sm items-center justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Link className="flex" href="/">
        <Image
          src={"/wangzai.png"}
          alt="Vercel Logo"
          className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
          width={60}
          height={60}
          priority
        />
        <p className="ml-4 text-center text-xl md:text-2xl lg:text-3xl">
          每日一片 (俄罗斯方块)
        </p>
      </Link>
      <ThemeButton />
    </div>
  )
}
