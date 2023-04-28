import PlayComponent from "@/components/play"
import { base_url } from "@/constant/constant"

const getDayMovie = async (id: string) => {
  const resp = await fetch(`${base_url}/movie/id/${id}`)

  return resp.json()
}

export default async function Home({ params }: any) {
  const data: any = await getDayMovie(params.playid)

  return (
    <main>
      <PlayComponent data={data.data} />
    </main>
  )
}
