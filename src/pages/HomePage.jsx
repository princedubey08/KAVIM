import { motion } from 'framer-motion'
import { ArrowRight, Cpu, HardHat, Headphones, Medal, TrendingUp, Users } from 'lucide-react'

const stats = [
  { icon: Medal, value: '500+', label: 'Placements' },
  { icon: TrendingUp, value: '10+', label: 'Global Markets' },
  { icon: Users, value: '98%', label: 'Retention' },
]

const verticals = [
  {
    icon: Cpu,
    title: 'IT & Technology',
    description:
      'Software Engineers, DevOps, Data Scientists, and Full-Stack Developers for cutting-edge projects.',
    accent: 'text-emerald-400',
  },
  {
    icon: Headphones,
    title: 'BPO & Operational Excellence',
    description:
      'Customer Service Specialists, Process Associates, Quality Analysts, and Team Leaders for seamless operations.',
    accent: 'text-yellow-300',
  },
  {
    icon: HardHat,
    title: 'Industrial & Skilled Workforce',
    description:
      'Technicians, Machine Operators, Logistics Personnel, and Trade Specialists for industrial excellence.',
    accent: 'text-amber-500',
  },
]

function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-white/10 bg-linear-to-r from-slate-900 to-slate-800 p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-300">The Talent Hub</p>
          <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
            Bridging the <span className="text-emerald-400">Global Talent Gap</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Rapid, Reliable Recruitment Solutions for Domestic and International Hiring.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-lg bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-400"
            >
              Source Elite Talent
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Accelerate Your Career
            </button>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-2xl bg-white p-7 text-center text-slate-900 shadow"
          >
            <item.icon className="mx-auto h-8 w-8 text-emerald-500" />
            <h2 className="mt-4 text-5xl font-black">{item.value}</h2>
            <p className="mt-2 text-base uppercase tracking-wider text-slate-600">{item.label}</p>
          </motion.article>
        ))}
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-black uppercase text-white sm:text-5xl"
        >
          Specialized Workforce Deployment
        </motion.h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-emerald-400" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {verticals.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8"
            >
              <item.icon className={`h-10 w-10 ${item.accent}`} />
              <h3 className="mt-4 text-3xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400"
              >
                Explore Verticals <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
