import { base_url } from "@/constant/constant"
import Image from "next/image"
import Link from "next/link"

type RespProps = {
  data: Movie[]
}

type Movie = {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt?: string
  movie_name: string
  movie_url: string
  movie_cover: string
}

const getDayList = async () => {
  const resp = await fetch(`${base_url}/movie/list?page_size=20&page_num=1`, {
    next: {
      revalidate: 1,
    },
  })

  return resp.json()
}

export default async function ListPage() {
  const data: RespProps = await getDayList()

  return (
    <div className="flex flex-wrap justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {data.data.map((item, index) => (
        <Link href={`/play/${item.ID}`} key={index} className="relative mb-8">
          <Image
            src={item.movie_cover}
            alt={item.movie_name}
            className="aspect-[9/13] h-auto w-[150px] rounded-lg lg:w-[300px]"
            width={700}
            height={500}
            priority
          />
          <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-t from-gray-900">
            <p className="absolute bottom-2 w-full text-center text-lg text-white lg:bottom-5 lg:text-xl">
              {item.movie_name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
