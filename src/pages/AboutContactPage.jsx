import { Building2, Link, Mail, PhoneCall } from 'lucide-react'
import { Page, Reveal, Stagger } from '../components/Motion'
import HeadquartersSection from '../components/HeadquartersSection'
import SectionHeader from '../components/SectionHeader'

function AboutContactPage() {
  return (
    <Page className="space-y-32">
      <section className="enterprise-section relative overflow-hidden rounded-[2.5rem] px-6 sm:px-10 lg:px-14">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
          alt="Leadership team background texture"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.04, filter: 'grayscale(20%) sepia(20%)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-br from-white via-white/95 to-white/85" />
        <div className="relative">
        <SectionHeader
          eyebrow="About"
          title="A recruitment partner built for reliability"
          description="KAVIM is a staffing solutions company across BPO, IT, and industrial segments. We build high-performing teams through structured vetting, fast execution, and accountable delivery."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Mission',
              text: 'Build dependable teams that accelerate business growth through quality-first, human-centered recruitment.',
            },
            {
              title: 'Vision',
              text: 'Become the most trusted staffing partner for companies scaling in BPO, IT, and industrial operations.',
            },
            {
              title: 'Value System',
              text: 'Speed with accountability, transparent execution, and long-term relationship building across every engagement.',
            },
          ].map((card) => (
            <Stagger key={card.title}>
              <Reveal className="enterprise-card p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">{card.title}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{card.text}</p>
              </Reveal>
            </Stagger>
          ))}
        </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-surface relative overflow-hidden rounded-[2.5rem] px-6 sm:px-10 lg:px-14">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80"
          alt="Corporate building background texture"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.04, filter: 'grayscale(20%) sepia(20%)' }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-slate-50/90" />
        <div className="relative">
        <SectionHeader
          eyebrow="Contact"
          title="Connect with our team"
          description="Share your requirement and we’ll respond with next steps, timelines, and a delivery approach."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Stagger>
          <Reveal>
          <form className="enterprise-card p-8 sm:p-10" onSubmit={(event) => event.preventDefault()}>
            <p className="text-sm font-semibold text-slate-900">Inquiry portal</p>
            <p className="mt-2 text-sm text-slate-600">
              Tell us about your hiring needs or your next career move.
            </p>

            <div className="mt-8 grid gap-5">
              {[
                { label: 'Name', placeholder: 'John Doe', type: 'text' },
                { label: 'Organization', placeholder: 'Company Name', type: 'text' },
                { label: 'Role', placeholder: 'Hiring Manager / HR / Candidate', type: 'text' },
              ].map((field) => (
                <label key={field.label} className="text-sm font-semibold text-slate-900">
                  {field.label}
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-200 focus:ring-4"
                  />
                </label>
              ))}

              <label className="text-sm font-semibold text-slate-900">
                Message
                <textarea
                  placeholder="Share your requirement..."
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-200 focus:ring-4"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Submit inquiry
              </button>
            </div>
          </form>
          </Reveal>
          </Stagger>

          <Stagger>
            <Reveal className="enterprise-card p-8 sm:p-10">
              <p className="text-sm font-semibold text-slate-900">Get in touch</p>

              <div className="mt-6 space-y-5 text-sm text-slate-600">
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <p>
                    KAVIM Technologies Private Limited
                    <br />
                    FF 177, Plot No C-1, Gaur City Center, Gautam Buddha Nagar, Uttar Pradesh
                    - 201318, India.
                  </p>
                </div>
                <div className="flex gap-3">
                  <PhoneCall className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <a href="tel:01205162306" className="font-semibold text-slate-700 transition hover:text-emerald-700">
                    01205162306
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <a
                    href="mailto:Info@kavimtechnologies.com"
                    className="font-semibold text-slate-700 transition hover:text-emerald-700"
                  >
                    Info@kavimtechnologies.com
                  </a>
                </div>
                <div className="flex gap-3">
                  <Link className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <a
                    href="https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all font-semibold text-slate-700 transition hover:text-emerald-700"
                  >
                    https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/
                  </a>
                </div>
              </div>
            </Reveal>
          </Stagger>
        </div>
        </div>
      </section>
      <HeadquartersSection />
    </Page>
  )
}

export default AboutContactPage
