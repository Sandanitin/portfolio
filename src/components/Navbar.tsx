import React, { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto px-4 py-4 max-w-screen-xl flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Sanda Nithin</span>
          <span className="text-[#8b5cf6]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white hover:underline underline-offset-4 decoration-[#8b5cf6]/70">
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1xC94_CNhjHVx035jbUH0aECrQv49qIRk"
            download="Sanda-Nithin-Resume.pdf"
            className="px-4 py-2 rounded-md bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition shadow"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-gray-200 hover:text-white hover:border-white/20"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-screen-xl px-4 py-4">
            <div className="flex flex-col gap-4 text-gray-200">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1xC94_CNhjHVx035jbUH0aECrQv49qIRk"
                download="Sanda-Nithin-Resume.pdf"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition shadow"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
