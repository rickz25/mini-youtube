import VideoCard from '../video/VideoCard.jsx'

export default function CreatorVideoList({ videos, onCreatorClick, onVideoClick }) {
  return (
    <section className="creator-videos">
      <h2>Uploads</h2>
      <div className="creator-video-list">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onCreatorClick={onCreatorClick}
            onVideoClick={onVideoClick}
          />
        ))}
      </div>
    </section>
  )
}
