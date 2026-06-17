import { useEffect, useMemo, useState } from 'react'
import Container from '../components/layout/Container.jsx'
import CreatorPage from '../features/creators/pages/CreatorPage.jsx'
import HomePage from '../features/videos/pages/HomePage.jsx'
import VideoDetailPage from '../features/videos/pages/VideoDetailPage.jsx'

function parseRoute() {
  const [page = 'home', id = ''] = window.location.hash.replace('#/', '').split('/')
  return { page, id }
}

function setRoute(page, id = '') {
  window.location.hash = id ? `/${page}/${id}` : `/${page}`
}

export default function Router() {
  const [route, setCurrentRoute] = useState(parseRoute)

  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(parseRoute())

    if (!window.location.hash) setRoute('home')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const activePage = useMemo(() => {
    if (route.page === 'creator') return 'home'
    return route.page
  }, [route.page])

  const navigate = (page, id) => setRoute(page, id)

  let page = <HomePage onCreatorClick={(id) => navigate('creator', id)} onVideoClick={(id) => navigate('watch', id)} />

  if (route.page === 'watch') {
    page = (
      <VideoDetailPage
        videoId={route.id}
        onCreatorClick={(id) => navigate('creator', id)}
        onVideoClick={(id) => navigate('watch', id)}
      />
    )
  }

  if (route.page === 'creator') {
    page = (
      <CreatorPage
        creatorId={route.id}
        onCreatorClick={(id) => navigate('creator', id)}
        onVideoClick={(id) => navigate('watch', id)}
      />
    )
  }

  return (
    <Container activePage={activePage} onNavigate={navigate}>
      {page}
    </Container>
  )
}
