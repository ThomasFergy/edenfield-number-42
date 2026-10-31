// All editable copy and facts for the site live here.
// Components only render what is in this file.

export const site = {
  name: 'Edenfield Number 42',
  tagline: "A welcoming, family-run guest house on Blackpool's quiet North Shore",
  address: {
    line1: '42 King Edward Avenue',
    town: 'Blackpool',
    postcode: 'FY2 9TA',
  },
  phone: { display: '07596 018111', href: 'tel:+447596018111' },
  hosts: 'Mel & Shaun',
  bookingUrl: 'https://www.booking.com/hotel/gb/number42.en-gb.html',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=42+King+Edward+Avenue+Blackpool+FY2+9TA',
  checkIn: '14:00 – 21:00',
  checkOut: '08:00 – 10:00',
} as const

export const nav = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#breakfast', label: 'Breakfast' },
  { href: '#reviews', label: 'Guest Reviews' },
  { href: '#find-us', label: 'Find Us' },
] as const

export const intro = {
  heading: 'Your home by the sea',
  paragraphs: [
    "Tucked away on a quiet street in North Shore, Edenfield Number 42 is a small guest house run by hosts Mel and Shaun. You're a short stroll from the seafront and the tram, yet far enough from the bustle of the Golden Mile for a proper night's sleep.",
    "Rooms are immaculate, beds are comfortable, and breakfast is cooked to order. It's the kind of place guests come back to.",
  ],
}

export const highlights = [
  { title: 'Immaculate rooms', text: 'Private bathrooms, fresh linen and a tea & coffee tray in every room.' },
  { title: 'Breakfast to remember', text: 'Continental or a full cooked breakfast, with bottomless tea and coffee.' },
  { title: 'Close to the sea', text: 'Under a kilometre to Bispham Beach and a short tram ride to the Tower.' },
  { title: 'Easy arrival', text: 'Free Wi-Fi, free on-street parking and a warm welcome from your hosts.' },
]

export const roomFeatures = [
  'Private bathroom with toiletries',
  'Tea & coffee making facilities',
  'Flat-screen TV with satellite channels',
  'Hairdryer',
  'Free Wi-Fi',
  'Heating',
]

export const rooms = [
  { name: 'Standard Twin Room', bed: 'Two single beds' },
  { name: 'Double Room', bed: 'One large double bed' },
  { name: 'Deluxe Double Room', bed: 'One large double bed' },
  { name: 'Deluxe King Room', bed: 'One large double bed' },
  { name: 'King Suite', bed: 'One large double bed' },
  { name: 'Deluxe King Suite', bed: 'One extra-large double bed' },
]

// Photos shown above the room list (files in src/photos). Not tied to a room type.
export const roomPhotos = [
  { name: 'room-1', alt: 'A bedroom with a wooden bed and patterned feature wall' },
  { name: 'room-2', alt: 'A bedroom with a king bed and two grey armchairs by the window' },
  { name: 'room-3', alt: 'A bedroom with a view through to the en-suite' },
  { name: 'bathroom', alt: 'A bright en-suite shower room with heated towel rail' },
]

export const breakfast = {
  heading: 'Breakfast',
  served: 'Served 07:30 – 09:30',
  intro: 'Start your day properly. Breakfast is cooked fresh each morning and served with toast and bottomless pots of tea and coffee.',
  options: [
    {
      title: 'Continental',
      text: 'Selection of cereals, toast, pastries, fruit, yoghurt, and juices.',
    },
    {
      title: 'Full Breakfast',
      text: '2× bacon, 2× sausage, hashbrown, egg, baked beans, mushrooms, and tomatoes.',
    },
    {
      title: 'For the Smaller Appetite',
      text: '1× bacon, 1× sausage, hashbrown, egg, baked beans, mushrooms, and tomatoes.',
    },
  ],
  dietary:
    'Please advise us of any dietary requirements, allergies or intolerances before 18:00 for us to be able to cater to your needs.',
}

// Rated on Booking.com, 217 reviews (snapshot — refresh occasionally).
export const reviews = {
  score: '9.7',
  outOf: '10',
  count: 217,
  label: 'Exceptional',
  source: 'Booking.com',
  categories: [
    { name: 'Staff', score: 9.8 },
    { name: 'Cleanliness', score: 9.8 },
    { name: 'Comfort', score: 9.7 },
    { name: 'Facilities', score: 9.7 },
    { name: 'Value for money', score: 9.7 },
    { name: 'Location', score: 9.4 },
  ],
  quotes: [
    { text: 'Very welcoming, exceptionally clean, comfortable bed, scrumptious breakfast. Friendly host. 5 stars without a doubt.', who: 'Sherrie' },
    { text: 'Hosts were really friendly and accommodating. Nothing was too much trouble.', who: 'Mariann' },
    { text: 'Perfect stay. Immaculate rooms, comfortable bed and a superb breakfast.', who: 'Lee' },
  ],
}

export const location = {
  heading: 'Find us',
  text: "We're on King Edward Avenue in North Shore, a very quiet road a short walk from the sea and the tram line, with easy on-street parking.",
  distances: [
    { place: 'Bispham Beach', distance: 'under 1 km' },
    { place: 'North Pier', distance: 'about 2 km' },
    { place: 'Blackpool Tower & Winter Gardens', distance: 'a short tram ride' },
  ],
}

export const goodToKnow = [
  { label: 'Check-in', value: site.checkIn },
  { label: 'Check-out', value: site.checkOut },
  { label: 'Parking', value: 'Free, on-street' },
  { label: 'Wi-Fi', value: 'Free throughout' },
  { label: 'Smoking', value: 'Non-smoking' },
  { label: 'Pets', value: 'Not permitted' },
  { label: 'Children', value: 'All ages welcome' },
  { label: 'Lift', value: 'No lift' },
]
