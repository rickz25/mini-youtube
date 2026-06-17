import { creators, videos } from '../../data/mockData.js'

export function getCreators() {
  return creators
}

export function getCreatorById(creatorId) {
  return creators.find((creator) => creator.id === creatorId) ?? creators[0]
}

export function getVideosByCreator(creatorId) {
  return videos.filter((video) => video.creatorId === creatorId)
}
