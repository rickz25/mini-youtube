import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

export default function Container({ activePage, children, onNavigate }) {
  return (
    <div className="app-shell">
      <Header onNavigate={onNavigate} />
      <div className="app-body">
        <Sidebar activePage={activePage} onNavigate={onNavigate} />
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
