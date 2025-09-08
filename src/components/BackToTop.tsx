import React, { useEffect, useState } from 'react'

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 px-3 py-2 rounded-full bg-brand-600 text-white shadow hover:bg-brand-500 transition ring-2 ring-brand-500/30 hover:ring-brand-400/60"
    >↑</button>
  )
}

export default BackToTop
