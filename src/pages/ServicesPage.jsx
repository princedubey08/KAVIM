import { AppWindow, Bot, Braces, BriefcaseBusiness, CheckCircle2, FileSearch, Handshake, Search } from 'lucide-react'
import { Page, Reveal, Stagger } from '../components/Motion'
import SectionHeader from '../components/SectionHeader'

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
    description:
      'Engineering-focused web teams built for speed, reliability, and long-term maintainability.',
  },
  {
    title: 'App Development',
    icon: AppWindow,
    bullets: [
      'Scalable Android and iOS applications',
      'Recruitment portal applications',
      'CRM and workforce management apps',
    ],
    description:
      'Premium mobile product squads that deliver polished, gesture-first user experiences at scale.',
  },
  {
    title: 'AI Solutions',
    icon: Bot,
    bullets: [
      'AI candidate screening systems',
      'Resume parsing workflows',
      'AI chatbots for engagement and support',
    ],
    description:
      'Data-guided automation and intelligence layers that unlock measurable efficiency gains.',
  },
]

function ServicesPage() {
  return (
    <Page className="space-y-32">
      <section className="enterprise-section relative overflow-hidden rounded-[2.5rem] px-6 sm:px-10 lg:px-14">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
          alt="Consulting team background texture"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.04, filter: 'grayscale(20%) sepia(20%)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-br from-white via-white/95 to-white/85" />

        <div className="relative grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Stagger className="max-w-2xl">
            <Reveal>
              <p className="enterprise-eyebrow">Services</p>
            </Reveal>
            <Reveal>
              <h1 className="enterprise-h1 mt-4">Consultative solutions for high-trust hiring</h1>
            </Reveal>
            <Reveal>
              <p className="enterprise-body mt-6">
                A repeatable system for sourcing, vetting, and onboarding talent—built for speed,
                quality, and long-term retention.
              </p>
            </Reveal>
          </Stagger>

          <Stagger>
            <Reveal className="enterprise-card p-8 sm:p-10">
              <p className="text-sm font-semibold text-slate-900">What you can expect</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {[
                  'Clear role definition and pipeline planning',
                  'Shortlists with fit analysis and interview coordination',
                  'Onboarding support and continuous follow-through',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Stagger>
        </div>
      </section>

      <section className="enterprise-section">
        <SectionHeader
          eyebrow="Our process"
          title="A six-phase methodology engineered for quality"
          description="A structured recruitment system designed to reduce time-to-hire while protecting consistency and retention."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <Stagger key={step.no}>
              <Reveal className="enterprise-card enterprise-card-hover p-7">
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-extrabold tracking-tight text-emerald-600">{step.no}</p>
                  <step.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </Reveal>
            </Stagger>
          ))}
        </div>
      </section>

      <section className="enterprise-section enterprise-surface rounded-[2.5rem] bg-slate-50 px-6 sm:px-10 lg:px-14">
        <SectionHeader
          eyebrow="Sector expertise"
          title="Split delivery for modern teams"
          description="Clean, focused service capability blocks built around strong typography, icon clarity, and outcome-first messaging."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {expertise.map((item) => (
            <Stagger key={item.title}>
              <Reveal className="rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex rounded-xl bg-emerald-500 p-2.5 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tighter text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {item.bullets.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Stagger>
          ))}
        </div>
      </section>
    </Page>
  )
}

export default ServicesPage
