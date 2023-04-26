"use client"

import { useRef, useState } from "react"
import VideoWrap from "./videowrap"
import Player from "video.js/dist/types/player"

const PlayComponent = () => {
  const playerRef = useRef<Player>()

  const [inputValue, setInputValue] = useState<string>(
    "https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL2.smil/playlist.m3u8",
  )

  const [option, setOption] = useState<any>({
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
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
      <div className="mb-4 w-[1200px]">
        <input
          className="box-border min-w-[90%] appearance-none py-2 pl-2 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          aria-label="请输入流媒体地址"
          placeholder="请输入流媒体地址"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* <input className="h-full  border-2 text-xl"></input> */}
        <button
          className="h-[44px] min-w-[10%] bg-gray-300 text-gray-700 shadow hover:bg-gray-500 hover:text-white"
          onClick={changeSrc}
        >
          立即播放
        </button>
      </div>
      <VideoWrap options={option} onReady={handlePlayerReady} />
    </>
  )
}

export default PlayComponent
