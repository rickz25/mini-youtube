import CreatorHeader from '../../../components/creator/CreatorHeader.jsx'
import CreatorVideoList from '../../../components/creator/CreatorVideoList.jsx'
import { getCreatorById, getVideosByCreator } from '../creatorService.js'
import { getVideos } from '../../videos/videoService.js'

export default function CreatorPage({ creatorId, onCreatorClick, onVideoClick }) {
  const creator = getCreatorById(creatorId)
  const videos = getVideosByCreator(creator.id)
  const videosWithCreators = getVideos().filter((video) => video.creatorId === creator.id)

  return (
    <>
      <CreatorHeader creator={creator} videoCount={videos.length} />
      <CreatorVideoList
        videos={videosWithCreators}
        onCreatorClick={onCreatorClick}
        onVideoClick={onVideoClick}
      />
    </>
  )
}
