import { motion } from 'framer-motion'

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: 'easeOut' },
}

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

export const revealItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function Page({ children, className }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, once = true }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-120px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Reveal({ children, className }) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  )
}

