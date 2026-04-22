import { motion } from 'framer-motion'

function HeadquartersSection() {
  return (
    <section className="enterprise-section px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white px-8 py-16 text-center shadow-sm sm:px-10"
      >
        <p className="enterprise-eyebrow">Headquarters</p>
        <h2 className="enterprise-h2 mt-4">KAVIM TECHNOLOGIES</h2>
        <p className="mt-6 text-xl font-bold tracking-tight text-slate-900">
          FF 177, Plot No C-1, Gaur City Center, UP, India
        </p>
      </motion.div>
    </section>
  )
}

export default HeadquartersSection

