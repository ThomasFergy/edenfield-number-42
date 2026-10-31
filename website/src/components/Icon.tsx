const paths: Record<string, string> = {
  bed: 'M3 19v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 16h18M7 9V7.5A1.5 1.5 0 0 1 8.5 6h3A1.5 1.5 0 0 1 13 7.5V9',
  cup: 'M5 9h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v2M11 3.5v2M14 3.5v2',
  waves: 'M2 8c2.2 0 2.8-2 5-2s2.8 2 5 2 2.8-2 5-2 2.8 2 5 2M2 13c2.2 0 2.8-2 5-2s2.8 2 5 2 2.8-2 5-2 2.8 2 5 2M2 18c2.2 0 2.8-2 5-2s2.8 2 5 2 2.8-2 5-2 2.8 2 5 2',
  key: 'M10.5 14.5 20 5M16 9l3 3M13.5 11.5l2 2M8 20a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z',
  star: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.8L12 3.5z',
  adults: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.5 20a5.5 5.5 0 0 1 11 0M16.5 11a2.5 2.5 0 1 0 0-5M17 14.5a5 5 0 0 1 3.5 5.5',
  wifi: 'M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0M12 19.5h.01',
  car: 'M4 16v-3.5L6 8h12l2 4.5V16M4 16h16M4 16v2.5M20 16v2.5M7.5 13h.01M16.5 13h.01',
  pin: 'M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11zM12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z',
}

export function Icon({ name, className = '' }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
