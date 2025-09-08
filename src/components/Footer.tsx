import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto px-4 py-10 max-w-screen-xl border-t border-gray-200 text-sm text-gray-600">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Sanda Nithin. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-brand-600" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-brand-600" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-brand-600" href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
