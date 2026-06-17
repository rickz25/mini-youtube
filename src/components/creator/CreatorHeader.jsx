import { formatViews } from '../../utils/formatters.js'

export default function CreatorHeader({ creator, videoCount }) {
  return (
    <section className="creator-header">
      <div className="avatar">{creator.avatar}</div>
      <div>
        <p className="eyebrow">{creator.specialty}</p>
        <h1>{creator.name}</h1>
        <p className="muted">
          {creator.handle} • {formatViews(creator.subscribers).replace('views', 'subscribers')} •{' '}
          {videoCount} uploads
        </p>
        <p className="creator-bio">{creator.bio}</p>
      </div>
    </section>
  )
}
