import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About & Contact', to: '/about-contact' },
]

const activeClass = 'text-emerald-700'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <div
        className={`border-b transition ${
          scrolled ? 'border-gray-100 bg-white/80 backdrop-blur-md shadow-sm shadow-slate-900/5' : 'border-gray-100 bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="block">
              <img
                src="/kavim-logo.png"
                alt="Kavim Technologies"
                className="h-10 w-auto px-2 py-1 sm:h-12"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold text-slate-700 transition hover:text-emerald-700 ${isActive ? activeClass : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/about-contact"
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-900 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-b border-gray-100 bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="space-y-1.5">
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700 ${
                      isActive ? activeClass : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/about-contact"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
