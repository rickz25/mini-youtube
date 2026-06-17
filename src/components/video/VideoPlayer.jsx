export default function VideoPlayer({ video }) {
  return (
    <section className={`player tone-${video.thumbnailTone}`} aria-label="Video player placeholder">
      <div className="play-button">▶</div>
      <p>{video.title}</p>
      <span>{video.duration}</span>
    </section>
  )
}
