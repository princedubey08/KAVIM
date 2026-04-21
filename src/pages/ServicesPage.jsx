import { motion } from 'framer-motion'
import { AppWindow, Bot, Braces, BriefcaseBusiness, CheckCircle2, FileSearch, Handshake, Search } from 'lucide-react'

const steps = [
  { no: '01', title: 'Discovery & Analysis', text: 'Deep-dive consultation to map your workforce needs and growth objectives.', icon: Search },
  { no: '02', title: 'Talent Sourcing', text: 'Strategic outreach through curated domestic and global talent networks.', icon: BriefcaseBusiness },
  { no: '03', title: 'Rigorous Vetting', text: 'Multi-stage screening with technical and behavioral assessments.', icon: FileSearch },
  { no: '04', title: 'Presentation & Selection', text: 'Shortlisted profiles with fit analysis and interview coordination.', icon: Handshake },
  { no: '05', title: 'Onboarding Support', text: 'Integrated support for documentation, orientation, and transitions.', icon: AppWindow },
  { no: '06', title: 'Retention Tracking', text: 'Continuous follow-through to ensure long-term success and retention.', icon: CheckCircle2 },
]

const expertise = [
  {
    title: 'Web Development',
    icon: Braces,
    bullets: [
      'Responsive high-performance websites',
      'E-commerce platform development',
      'Custom web applications',
    ],
  },
  {
    title: 'App Development',
    icon: AppWindow,
    bullets: [
      'Scalable Android and iOS applications',
      'Recruitment portal applications',
      'CRM and workforce management apps',
    ],
  },
  {
    title: 'AI Solutions',
    icon: Bot,
    bullets: [
      'AI candidate screening systems',
      'Resume parsing workflows',
      'AI chatbots for engagement and support',
    ],
  },
]

function ServicesPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 sm:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black uppercase text-white sm:text-6xl"
        >
          Consultative Solutions
        </motion.h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Our proven methodology combines industry expertise, rigorous vetting, and
          personalized service to deliver recruitment outcomes that scale.
        </p>
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-black uppercase text-white sm:text-5xl"
        >
          The KAVIM Methodology
        </motion.h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-slate-300">
          A six-phase recruitment process engineered for quality, speed, and long-term retention.
        </p>
        <div className="mx-auto mt-3 h-1 w-16 bg-emerald-400" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.no}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-4xl font-black text-emerald-400">{step.no}</p>
                <step.icon className="h-7 w-7 text-slate-100" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-black uppercase text-white sm:text-5xl"
        >
          Sector Expertise
        </motion.h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-slate-300">
          Deep domain capabilities across web, mobile, and AI-enabled workforce solutions.
        </p>
        <div className="mx-auto mt-3 h-1 w-16 bg-emerald-400" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-slate-900 p-7"
            >
              <item.icon className="h-9 w-9 text-emerald-400" />
              <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                {item.bullets.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
