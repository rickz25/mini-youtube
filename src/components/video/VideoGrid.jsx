import VideoCard from './VideoCard.jsx'

export default function VideoGrid({ videos, onCreatorClick, onVideoClick }) {
  return (
    <section className="video-grid" aria-label="Videos">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onCreatorClick={onCreatorClick}
          onVideoClick={onVideoClick}
        />
      ))}
    </section>
  )
}
