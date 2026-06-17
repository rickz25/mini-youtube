import VideoPlayer from '../../../components/video/VideoPlayer.jsx'
import RelatedVideos from '../../../components/video/RelatedVideos.jsx'
import { formatDate, formatViews } from '../../../utils/formatters.js'
import { getRelatedVideos, getVideoById } from '../videoService.js'

export default function VideoDetailPage({ onCreatorClick, onVideoClick, videoId }) {
  const video = getVideoById(videoId)
  const relatedVideos = getRelatedVideos(video.id)

  return (
    <div className="detail-layout">
      <article className="watch-area">
        <VideoPlayer video={video} />
        <div className="watch-meta">
          <h1>{video.title}</h1>
          <p className="muted">
            {formatViews(video.views)} • {formatDate(video.publishedAt)}
          </p>
          <button className="creator-pill" type="button" onClick={() => onCreatorClick(video.creator.id)}>
            <span className="small-avatar">{video.creator.avatar}</span>
            <span>
              <strong>{video.creator.name}</strong>
              <small>{video.creator.handle}</small>
            </span>
          </button>
          <p className="description">{video.description}</p>
        </div>
      </article>

      <RelatedVideos
        videos={relatedVideos}
        onCreatorClick={onCreatorClick}
        onVideoClick={onVideoClick}
      />
    </div>
  )
}
