import Image from "next/image"
import VideoWrap from "./videowrap"

const PlayComponent = (params: {
  data: {
    movie_url: string
    movie_name: string
    movie_cover: string
  }
}) => {
  console.log(params.data)

  const fotmatType = (url: string) => {
    if (url.endsWith("mp4")) {
      return {
        src: url,
        type: "video/mp4",
      }
    } else if (url.endsWith("m3u8")) {
      return {
        src: url,
        type: "application/x-mpegURL",
      }
    }
  }

  const option = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: fotmatType(params.data.movie_url),
  }

  return (
    <>
      <div className="relative">
        <Image
          src={params.data.movie_cover}
          alt={params.data.movie_name}
          className="aspect-[9/13] rounded-lg object-cover lg:aspect-[8/9] lg:w-full"
          width={700}
          height={500}
          priority
        />
        <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-t from-gray-900">
          <div className="absolute bottom-[-70px] w-full lg:bottom-0">
            <VideoWrap options={option} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayComponent
