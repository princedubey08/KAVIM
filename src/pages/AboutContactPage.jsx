import { motion } from 'framer-motion'
import { Building2, Link, Mail, MapPin, PhoneCall } from 'lucide-react'

function AboutContactPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 sm:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black uppercase text-white sm:text-6xl"
        >
          Our Journey & DNA
        </motion.h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          KAVIM is a fast-growing staffing solution company specializing in BPO, IT, and
          Blue-collar segments. We partner with organizations to build reliable, high-performing
          teams at speed.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-slate-900 p-7 sm:p-8"
        >
          <h2 className="text-3xl font-black uppercase text-white">Inquiry Portal</h2>
          <p className="mt-2 text-slate-300">
            Connect with our team to discuss workforce needs and opportunities.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400 focus:ring-2"
              />
            </label>

            <label className="text-sm font-medium text-slate-200">
              Organization
              <input
                type="text"
                placeholder="Company Name"
                className="mt-2 w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400 focus:ring-2"
              />
            </label>

            <label className="text-sm font-medium text-slate-200">
              Role
              <input
                type="text"
                placeholder="Hiring Manager / HR / Candidate"
                className="mt-2 w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400 focus:ring-2"
              />
            </label>

            <label className="text-sm font-medium text-slate-200">
              Message
              <textarea
                placeholder="Share your requirement..."
                rows={5}
                className="mt-2 w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400 focus:ring-2"
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-400"
            >
              Submit Inquiry
            </button>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-2xl border border-white/10 bg-slate-900 p-7 sm:p-8"
        >
          <h2 className="text-3xl font-black uppercase text-white">Get in Touch</h2>

          <div className="mt-6 space-y-5 text-slate-300">
            <div className="flex gap-3">
              <Building2 className="mt-1 h-5 w-5 text-emerald-400" />
              <p>
                KAVIM Technologies Private Limited
                <br />
                FF 177, Plot No C-1, Gaur City Center, Gautam Buddha Nagar, Uttar Pradesh
                - 201318, India.
              </p>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-emerald-400" />
              <p>India</p>
            </div>
            <div className="flex gap-3">
              <PhoneCall className="mt-1 h-5 w-5 text-emerald-400" />
              <a href="tel:01205162306" className="hover:text-emerald-400">
                01205162306
              </a>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-emerald-400" />
              <a href="mailto:Info@kavimtechnologies.com" className="hover:text-emerald-400">
                Info@kavimtechnologies.com
              </a>
            </div>
            <div className="flex gap-3">
              <Link className="mt-1 h-5 w-5 text-emerald-400" />
              <a
                href="https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
                className="break-all hover:text-emerald-400"
              >
                https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/
              </a>
            </div>
          </div>
        </motion.aside>
      </section>
    </div>
  )
}

export default AboutContactPage
