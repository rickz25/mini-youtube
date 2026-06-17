import { useMemo } from 'react'
import { getVideos } from '../features/videos/videoService.js'

export function useVideos() {
  return useMemo(() => getVideos(), [])
}
