export const creators = [
  {
    id: 'maya-lens',
    name: 'Maya Lens',
    handle: '@mayalens',
    avatar: 'ML',
    specialty: 'Travel filmmaker',
    subscribers: 128000,
    bio: 'Short cinematic field notes from cities, coastlines, and quiet corners worth noticing.',
  },
  {
    id: 'studio-byte',
    name: 'Studio Byte',
    handle: '@studiobyte',
    avatar: 'SB',
    specialty: 'Design and software',
    subscribers: 86000,
    bio: 'Practical product design breakdowns, UI rebuilds, and small app experiments.',
  },
  {
    id: 'kitchen-loop',
    name: 'Kitchen Loop',
    handle: '@kitchenloop',
    avatar: 'KL',
    specialty: 'Food stories',
    subscribers: 214000,
    bio: 'Comfort food, street food, and recipe videos told with warm lighting and simple steps.',
  },
]

export const videos = [
  {
    id: 'city-after-rain',
    title: 'City After Rain: A 3 Minute Night Walk',
    creatorId: 'maya-lens',
    description:
      'A quiet trailer-style scene study following reflections, train lights, and late-night food stalls after a summer storm.',
    views: 482000,
    publishedAt: '2026-06-04',
    duration: '3:12',
    category: 'Travel',
    thumbnailTone: 'blue',
  },
  {
    id: 'dashboard-redesign',
    title: 'Redesigning a Creator Dashboard from Scratch',
    creatorId: 'studio-byte',
    description:
      'A compact walkthrough of layout decisions, navigation hierarchy, empty states, and reusable dashboard components.',
    views: 156000,
    publishedAt: '2026-05-22',
    duration: '12:48',
    category: 'Design',
    thumbnailTone: 'green',
  },
  {
    id: 'pantry-pasta',
    title: '15 Minute Pantry Pasta for Busy Nights',
    creatorId: 'kitchen-loop',
    description:
      'A fast, flexible pasta built from shelf staples, with a few easy swaps depending on what is already in the kitchen.',
    views: 718000,
    publishedAt: '2026-06-11',
    duration: '8:05',
    category: 'Food',
    thumbnailTone: 'red',
  },
  {
    id: 'island-morning',
    title: 'Island Morning Soundscape',
    creatorId: 'maya-lens',
    description:
      'Soft waves, dockside coffee, and a small boat ride captured as a peaceful visual postcard.',
    views: 93000,
    publishedAt: '2026-04-18',
    duration: '5:34',
    category: 'Travel',
    thumbnailTone: 'teal',
  },
  {
    id: 'microinteractions',
    title: 'Microinteractions That Make Apps Feel Polished',
    creatorId: 'studio-byte',
    description:
      'Examples of tiny interface details that improve confidence: hover states, loading feedback, and transition timing.',
    views: 203000,
    publishedAt: '2026-06-01',
    duration: '10:21',
    category: 'Design',
    thumbnailTone: 'violet',
  },
  {
    id: 'market-breakfast',
    title: 'Breakfast at the Weekend Market',
    creatorId: 'kitchen-loop',
    description:
      'A relaxed food scene featuring fresh bread, grilled skewers, fruit stands, and the makers behind them.',
    views: 365000,
    publishedAt: '2026-05-10',
    duration: '6:47',
    category: 'Food',
    thumbnailTone: 'amber',
  },
]
