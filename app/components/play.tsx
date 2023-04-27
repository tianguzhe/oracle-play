"use client"

import { useRef, useState } from "react"
import VideoWrap from "./videowrap"
import Player from "video.js/dist/types/player"

const PlayComponent = () => {
  const playerRef = useRef<Player>()

  const [inputValue, setInputValue] = useState<string>("")

  const [option, setOption] = useState<any>({
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: {
      src: "https://sf9-dycdn-tos.pstatp.com/obj/tos-cn-i-8gu37r9deh/4b33493c98364d898208861bc299f651?filename=1.mp4",
      type: "video/mp4",
    },
  })

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

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting")
    })

    player.on("dispose", () => {
      console.log("player will dispose")
    })
  }

  const changeSrc = () => {
    setOption({
      ...option,
      sources: [fotmatType(inputValue)],
    })
  }

  return (
    <>
      <div className="mb-4 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <input
          className="box-border min-w-[80%] appearance-none py-2 pl-2 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white xl:min-w-[85%]"
          type="text"
          aria-label="请输入流媒体地址"
          placeholder="请输入流媒体地址"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="h-[44px] min-w-[20%] bg-gray-300  text-gray-700 shadow hover:bg-gray-500 hover:text-white xl:min-w-[15%]"
          onClick={changeSrc}
        >
          立即播放
        </button>
      </div>
      {Object.keys(option).indexOf("sources") != -1 && (
        <VideoWrap options={option} onReady={handlePlayerReady} />
      )}
    </>
  )
}

export default PlayComponent
