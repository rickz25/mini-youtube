import VideoCard from './VideoCard.jsx'

export default function RelatedVideos({ videos, onCreatorClick, onVideoClick }) {
  return (
    <aside className="related-videos" aria-label="Related videos">
      <h2>Related videos</h2>
      <div className="related-list">
        {videos.map((video) => (
          <VideoCard
            compact
            key={video.id}
            video={video}
            onCreatorClick={onCreatorClick}
            onVideoClick={onVideoClick}
          />
        ))}
      </div>
    </aside>
  )
}
