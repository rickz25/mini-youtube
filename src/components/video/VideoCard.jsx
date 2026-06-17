import { formatDate, formatViews } from '../../utils/formatters.js'

export default function VideoCard({ video, onCreatorClick, onVideoClick, compact = false }) {
  return (
    <article className={compact ? 'video-card compact' : 'video-card'}>
      <button
        className={`thumbnail tone-${video.thumbnailTone}`}
        type="button"
        onClick={() => onVideoClick(video.id)}
        aria-label={`Watch ${video.title}`}
      >
        <span>{video.category}</span>
        <strong>{video.duration}</strong>
      </button>

      <div className="video-copy">
        <button className="video-title" type="button" onClick={() => onVideoClick(video.id)}>
          {video.title}
        </button>
        <button className="creator-link" type="button" onClick={() => onCreatorClick(video.creator.id)}>
          {video.creator.name}
        </button>
        <p>
          {formatViews(video.views)} • {formatDate(video.publishedAt)}
        </p>
      </div>
    </article>
  )
}
