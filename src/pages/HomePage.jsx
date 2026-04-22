import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Cpu, HardHat, Headphones, Medal, TrendingUp, Users } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Page, Reveal, Stagger } from '../components/Motion'
import SectionHeader from '../components/SectionHeader'
import SuccessStoryCard from '../components/SuccessStoryCard'

const stats = [
  { icon: Medal, value: '100+', label: 'Placements' },
  { icon: TrendingUp, value: '10+', label: 'Global Markets' },
  { icon: Users, value: '98%', label: 'Retention' },
]

const verticals = [
  {
    icon: Cpu,
    title: 'Technology & IT',
    description:
      'Software Engineers, DevOps, Data Scientists, and Full-Stack Developers for modern product teams.',
  },
  {
    icon: Headphones,
    title: 'BPO & Operations',
    description:
      'Customer Service Specialists, Process Associates, Quality Analysts, and Team Leaders for seamless operations.',
  },
  {
    icon: HardHat,
    title: 'Industrial & Skilled Workforce',
    description:
      'Technicians, Machine Operators, Logistics Personnel, and Trade Specialists for industrial excellence.',
  },
]

function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <Page className="space-y-32">
      <section ref={heroRef} className="relative -mx-4 min-h-screen overflow-hidden sm:-mx-6 lg:-mx-8">
        <motion.img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80"
          alt="Enterprise office workspace"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ y: bgY, filter: 'grayscale(20%) sepia(20%)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/35 to-transparent" />

        <motion.div style={{ y: contentY }} className="relative grid min-h-screen items-center gap-20 px-6 py-24 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
          <Stagger className="max-w-3xl">
            <Reveal>
              <p className="enterprise-eyebrow text-emerald-300">Enterprise Talent Platform</p>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-7xl">
                Premium Workforce Solutions for <span className="text-emerald-400">Modern Enterprises</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100/90">
                Built for quality, speed, and trust. KAVIM helps ambitious organizations scale
                high-performing teams across BPO, IT, and industrial operations.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  to="/about-contact"
                  className="rounded-2xl bg-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                >
                  Source Elite Talent
                </Link>
                <Link
                  to="/services"
                  className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </Stagger>

          <Stagger className="relative">
            <Reveal className="rounded-3xl border border-white/20 bg-white/12 p-7 shadow-2xl backdrop-blur-md sm:p-9">
              <p className="text-sm font-semibold text-white">Enterprise-ready delivery</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-100/90">
                {[
                  'Role-to-offer pipelines tuned for speed and quality',
                  'Structured vetting: technical + behavioral + fit',
                  'Onboarding support and retention tracking',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Focus areas
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  BPO • IT • Industrial workforce
                </p>
              </div>
            </Reveal>
            <div className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
          </Stagger>
        </motion.div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {stats.map((item) => (
          <Stagger key={item.label}>
            <Reveal className="enterprise-card p-8 text-center">
            <item.icon className="mx-auto h-8 w-8 text-emerald-600" />
            <p className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900">{item.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {item.label}
            </p>
            </Reveal>
          </Stagger>
        ))}
      </section>

      <section className="enterprise-section enterprise-surface relative overflow-hidden rounded-[2.5rem] px-6 sm:px-10 lg:px-14">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
          alt="Office collaboration background texture"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.04, filter: 'grayscale(20%) sepia(20%)' }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-white/85" />
        <div className="relative">
        <SectionHeader
          eyebrow="Sector coverage"
          title="Specialized workforce deployment"
          description="Purpose-built recruitment programs across technology, operations, and industrial staffing—with consistent delivery quality."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {verticals.map((item) => (
            <Stagger key={item.title}>
              <Reveal className="enterprise-card enterprise-card-hover p-8">
              <item.icon className="h-10 w-10 text-emerald-600" />
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <Link
                to="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
              >
                Explore capabilities <ArrowRight className="h-4 w-4" />
              </Link>
              </Reveal>
            </Stagger>
          ))}
        </div>
        </div>
      </section>

      <section className="enterprise-section overflow-hidden rounded-[2.5rem] bg-slate-50 px-6 sm:px-10 lg:px-14">
        <SectionHeader
          eyebrow="Success stories"
          title="Narratives of measurable enterprise growth"
          description="Clear delivery strategy paired with execution discipline that compounds business outcomes."
          align="center"
        />

        <Stagger className="mt-12">
          <Reveal>
            <SuccessStoryCard
              eyebrow="CLIENT TRIUMPHS"
              title="Helping an IT firm scale by 300% in 6 months"
              narrative="KAVIM partnered with a fast-growing technology firm facing delayed product launches due to hiring bottlenecks. We rebuilt their hiring funnel, deployed role-based screening, and streamlined onboarding workflows, enabling rapid team expansion while preserving quality and retention across critical engineering and support functions."
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
              imageAlt="Professionals collaborating in a modern office"
            />
          </Reveal>
        </Stagger>
      </section>
    </Page>
  )
}

export default HomePage
