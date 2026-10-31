// Renders a real photo if one exists in src/photos/<name>.(jpg|jpeg|png|webp),
// otherwise an on-brand placeholder, so the site looks finished before photos arrive.

const files = import.meta.glob<string>('../photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName: Record<string, string> = {}
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '')
  byName[name] = url
}

type Props = { name: string; alt: string; className?: string; eager?: boolean }

export function Photo({ name, alt, className = '', eager = false }: Props) {
  const src = byName[name]
  if (src) {
    return (
      <img
        className={`photo ${className}`}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }
  return (
    <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="24" y="24" width="72" height="72" transform="rotate(45 60 60)" />
          <rect x="34" y="34" width="52" height="52" transform="rotate(45 60 60)" opacity=".5" />
        </g>
        <text x="60" y="68" textAnchor="middle" fontSize="22" fill="currentColor" fontFamily="Cinzel, serif">42</text>
      </svg>
      {import.meta.env.DEV && <span className="photo__hint">add src/photos/{name}.jpg</span>}
    </div>
  )
}
