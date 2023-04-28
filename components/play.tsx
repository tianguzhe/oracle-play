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
    <div>
      <p className="mb-4 text-center text-xl text-black lg:text-3xl">
        {params.data.movie_name}
      </p>
      <VideoWrap options={option} />
    </div>
  )
}

export default PlayComponent
