import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About & Contact', to: '/about-contact' },
]

const activeClass = 'text-emerald-400'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-left">
              <img
                src="/kavim-logo.png"
                alt="Kavim Technologies"
                className="h-11 w-auto sm:h-12"
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium text-slate-200 transition hover:text-emerald-400 ${isActive ? activeClass : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                to="/about-contact"
                className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Contact Us
              </Link>
            </div>

            <button
              type="button"
              className="rounded-md p-2 text-slate-100 md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4 md:hidden">
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-2 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-emerald-400 ${isActive ? activeClass : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/about-contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Contact Us
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
