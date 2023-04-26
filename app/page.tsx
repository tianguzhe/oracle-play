import PlayComponent from "./components/play"
import ThemeButton from "./theme"

export default function Home() {
  return (
    // p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4

    <main className="mx-auto min-h-screen max-w-sm bg-white p-6 dark:bg-black">
      <div className="mb-8 flex max-w-sm items-center justify-between">
        <h1 className="text-center text-xl">Oracle Play</h1>
        <ThemeButton />
      </div>
      <PlayComponent />
    </main>
  )
}
