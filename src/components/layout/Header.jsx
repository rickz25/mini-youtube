export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <button className="brand" type="button" onClick={() => onNavigate('home')}>
        <span className="brand-mark">▶</span>
        <span>MiniTube</span>
      </button>

      <label className="search" aria-label="Search videos">
        <span>⌕</span>
        <input type="search" placeholder="Search videos, creators, scenes" />
      </label>

      <button className="upload-button" type="button">
        Upload
      </button>
    </header>
  )
}
