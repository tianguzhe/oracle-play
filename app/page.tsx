import PlayComponent from "./components/play"
import ThemeButton from "./theme"

const getDayMovie = async () => {
  const resp = await fetch("http://138.2.227.220:8000/movie/俄罗斯方块")

  return resp.json()
}

export default async function Home() {
  const data: any = await getDayMovie()

  return (
    <main>
      <PlayComponent url={data.movieUrl} />
    </main>
  )
}
