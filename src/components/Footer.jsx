import { Link } from 'react-router-dom'
import { Mail, PhoneCall } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-3xl font-black text-white">KAVIM</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            Technologies Private Limited
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Specialized recruitment solutions for BPO, IT, and industrial teams across
            domestic and international markets.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p>
              <Link to="/" className="hover:text-emerald-400">
                Home
              </Link>
            </p>
            <p>
              <Link to="/services" className="hover:text-emerald-400">
                Services
              </Link>
            </p>
            <p>
              <Link to="/about-contact" className="hover:text-emerald-400">
                About & Contact
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>01205162306</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>Info@kavimtechnologies.com</span>
            </p>
            <a
              href="https://www.linkedin.com/company/kavimtechnologies-pvt-ltd/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h3.96V21H3V8.98Zm7.22 0H14v1.64h.05c.52-.98 1.8-2.02 3.7-2.02C21.7 8.6 23 11 23 14.22V21h-3.95v-5.99c0-1.43-.03-3.27-1.99-3.27-1.99 0-2.29 1.56-2.29 3.16V21H10.8V8.98Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © 2026 KAVIM Technologies Private Limited. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
