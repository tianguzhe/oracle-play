import PlayComponent from "./components/play"
import ThemeButton from "./theme"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-24 dark:bg-black">
      <div className="mb-8 flex w-[1200px] items-center justify-between">
        <h1 className="ml-[460px] text-center text-5xl">Oracle Play</h1>
        <ThemeButton />
      </div>
      <PlayComponent />
    </main>
  )
}
