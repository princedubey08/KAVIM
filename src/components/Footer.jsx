import { Link } from 'react-router-dom'
import { Mail, PhoneCall } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">KAVIM</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technologies Private Limited
          </p>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Specialized recruitment solutions for BPO, IT, and industrial teams with
            consistent quality and delivery.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold text-slate-900">Quick Links</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              <Link to="/" className="transition hover:text-emerald-700">
                Home
              </Link>
            </p>
            <p>
              <Link to="/services" className="transition hover:text-emerald-700">
                Services
              </Link>
            </p>
            <p>
              <Link to="/about-contact" className="transition hover:text-emerald-700">
                About & Contact
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-base font-semibold text-slate-900">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>01205162306</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-600" />
              <span>Info@kavimtechnologies.com</span>
            </p>
            <a
              href="https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h3.96V21H3V8.98Zm7.22 0H14v1.64h.05c.52-.98 1.8-2.02 3.7-2.02C21.7 8.6 23 11 23 14.22V21h-3.95v-5.99c0-1.43-.03-3.27-1.99-3.27-1.99 0-2.29 1.56-2.29 3.16V21H10.8V8.98Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        © 2026 KAVIM Technologies Private Limited. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
