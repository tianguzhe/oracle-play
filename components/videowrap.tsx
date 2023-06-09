"use client"

import { useEffect, useRef } from "react"
import videojs from "video.js"
import Player from "video.js/dist/types/player"
import "video.js/dist/video-js.css"

import "./index.css"

export const VideoWrap = (props: {
  options: any
  onReady?: (p: Player) => void
}) => {
  const videoRef = useRef<any>(null)
  const playerRef = useRef<any>(null)
  const { options, onReady } = props

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js")

      videoElement.classList.add("vjs-theme-forest")
      videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready")
        onReady && onReady(player)
      }))

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div ref={videoRef} />
    </div>
  )
}

export default VideoWrap
