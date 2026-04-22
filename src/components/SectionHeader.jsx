import { Reveal, Stagger } from './Motion'

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Stagger className={align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow ? (
        <Reveal>
          <p className={`enterprise-eyebrow ${alignClass}`}>{eyebrow}</p>
        </Reveal>
      ) : null}

      <Reveal>
        <h2 className={`enterprise-h2 mt-4 ${alignClass}`}>{title}</h2>
      </Reveal>

      {description ? (
        <Reveal>
          <p className={`enterprise-body mt-5 ${alignClass}`}>{description}</p>
        </Reveal>
      ) : null}
    </Stagger>
  )
}

export default SectionHeader

