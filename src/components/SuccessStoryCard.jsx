import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function SuccessStoryCard({
  eyebrow = 'Client story',
  title,
  narrative,
  image,
  imageAlt,
}) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 85%', 'end 15%'],
  })
  const glideX = useTransform(scrollYProgress, [0, 1], [-36, 36])

  return (
    <motion.article
      ref={cardRef}
      style={{ x: glideX }}
      className="enterprise-card grid overflow-hidden rounded-4xl lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col justify-center bg-white p-8 pt-8 sm:p-10 lg:p-12">
        <p className="enterprise-eyebrow">{eyebrow}</p>
        <h3 className="mt-4 text-3xl font-extrabold tracking-tighter text-slate-900 sm:text-4xl">{title}</h3>
        <p className="mt-6 text-base leading-relaxed text-slate-600">{narrative}</p>
      </div>

      <div className="relative min-h-72">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-transparent" />
      </div>
    </motion.article>
  )
}

export default SuccessStoryCard
