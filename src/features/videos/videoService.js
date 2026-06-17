import { creators, videos } from '../../data/mockData.js'

const withCreator = (video) => ({
  ...video,
  creator: creators.find((creator) => creator.id === video.creatorId),
})

export function getVideos() {
  return videos.map(withCreator)
}

export function getVideoById(videoId) {
  const video = videos.find((item) => item.id === videoId) ?? videos[0]
  return withCreator(video)
}

export function getRelatedVideos(videoId) {
  const current = getVideoById(videoId)

  return videos
    .filter((video) => video.id !== current.id)
    .sort((a, b) => {
      const categoryMatch =
        Number(b.category === current.category) - Number(a.category === current.category)
      return categoryMatch || b.views - a.views
    })
    .slice(0, 4)
    .map(withCreator)
}
