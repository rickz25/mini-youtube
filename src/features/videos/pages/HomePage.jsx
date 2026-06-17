import VideoGrid from '../../../components/video/VideoGrid.jsx'
import { useVideos } from '../../../hooks/useVideos.js'

export default function HomePage({ onCreatorClick, onVideoClick }) {
  const videos = useVideos()

  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Featured scenes</p>
        <h1>Watch short stories from independent creators</h1>
        <p>
          A compact sample of how a video platform can organize discovery, playback, and creator
          profiles using static data.
        </p>
      </section>

      <VideoGrid videos={videos} onCreatorClick={onCreatorClick} onVideoClick={onVideoClick} />
    </>
  )
}
