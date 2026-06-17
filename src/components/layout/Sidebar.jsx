const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'travel', label: 'Travel' },
  { id: 'design', label: 'Design' },
  { id: 'food', label: 'Food' },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar" aria-label="Primary">
      {navItems.map((item) => (
        <button
          className={activePage === item.id ? 'active' : ''}
          key={item.id}
          type="button"
          onClick={() => onNavigate('home')}
        >
          {item.label}
        </button>
      ))}
    </aside>
  )
}
