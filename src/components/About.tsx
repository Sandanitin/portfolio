import React, { useState } from 'react'
import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'
import NithinImg from '../assets/about.jpeg'

const tabs = ['Skills', 'Experience', 'Education'] as const

type Tab = typeof tabs[number]

const About: React.FC = () => {
  const [active, setActive] = useState<Tab>('Skills')
  const onImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget
    if (!img.src.endsWith('/avatar.svg')) {
      img.src = '/avatar.svg'
    }
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 relative overflow-hidden">
      {/* Creative background with geometric patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Hexagonal pattern - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-24 h-24 border border-[#67e8f9]/20 transform rotate-45 animate-spin-slow"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-32 h-32 border-2 border-[#06b6d4]/15 rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-[#3b82f6]/10 to-transparent transform rotate-12 animate-bounce"></div>
        
        {/* Creative diagonal lines */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/3 right-0 w-1/2 h-px bg-gradient-to-l from-[#67e8f9]/30 to-transparent transform rotate-12"></div>
          <div className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-[#06b6d4]/20 to-transparent transform -rotate-6"></div>
        </div>
      </div>
      
      <Container>
        {/* Creative section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"></div>
              <span className="text-[#67e8f9] font-semibold text-xs sm:text-sm tracking-wider uppercase">About Me</span>
              <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]">Developer</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            I'm a developer focused on crafting usable, performant products with modern web tech.
          </p>
        </div>

        {/* Creative content layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Creative image and stats */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Creative image container */}
            <div className="relative group max-w-sm mx-auto lg:max-w-none">
              {/* Geometric frame */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-[#67e8f9]/30 transform rotate-6 rounded-2xl"></div>
              <div className="absolute -inset-2 sm:-inset-3 border border-[#06b6d4]/20 transform -rotate-3 rounded-2xl"></div>
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={NithinImg} alt="About portrait" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={onImgError} />
              </div>
              
              {/* Creative floating elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#67e8f9] to-[#06b6d4] rounded-full animate-bounce"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-full animate-bounce delay-1000"></div>
            </div>
            
            {/* Creative stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-[#67e8f9] mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-[#06b6d4] mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Right side - Creative tabbed content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Creative tab navigation */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    active === t 
                      ? 'bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] text-white shadow-lg' 
                      : 'bg-black/30 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Creative content panels */}
            <div className="space-y-6 sm:space-y-8">
              {active === 'Skills' && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Small badge component with icon */}
                  <div className="hidden" aria-hidden>
                    {/* placeholder to keep JSX happy when no sections render */}
                  </div>
                  
                  {/* helper badge renderer */}
                  {/**/}
                  {/* Front-End */}
                  <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-3 sm:mb-4">Front‑End Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'HTML', icon: '🌐' },
                        { name: 'CSS', icon: '🎨' },
                        { name: 'JavaScript', icon: '🟨' },
                        { name: 'Bootstrap', icon: '🅱️' },
                        { name: 'React.js', icon: '⚛️' },
                        { name: 'Tailwind CSS', icon: '🌀' },
                        { name: 'Vite', icon: '⚡' },
                      ].map((s) => (
                        <span key={s.name} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 inline-flex items-center gap-1.5">
                          <span aria-hidden>{s.icon}</span>
                          <span>{s.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Back-End */}
                  <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-3 sm:mb-4">Back‑End Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Node.js (Basic)', icon: '🟢' },
                        { name: 'MongoDB (Basic)', icon: '🍃' },
                      ].map((s) => (
                        <span key={s.name} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 inline-flex items-center gap-1.5">
                          <span aria-hidden>{s.icon}</span>
                          <span>{s.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programming */}
                  <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-3 sm:mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'JavaScript', icon: '🟨' },
                      ].map((s) => (
                        <span key={s.name} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 inline-flex items-center gap-1.5">
                          <span aria-hidden>{s.icon}</span>
                          <span>{s.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-3 sm:mb-4">Version Control & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Git', icon: '🌿' },
                        { name: 'GitHub', icon: '🐙' },
                        { name: 'Visual Studio Code', icon: '🧰' },
                      ].map((s) => (
                        <span key={s.name} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 inline-flex items-center gap-1.5">
                          <span aria-hidden>{s.icon}</span>
                          <span>{s.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <h3 className="text-white font-bold mb-3 sm:mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Problem-solving', icon: '🧩' },
                        { name: 'Time Management', icon: '⏱️' },
                      ].map((s) => (
                        <span key={s.name} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 inline-flex items-center gap-1.5">
                          <span aria-hidden>{s.icon}</span>
                          <span>{s.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {active === 'Experience' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="group p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg sm:text-2xl">💼</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Associate Intern — Build Your Vision</h3>
                        <p className="text-[#67e8f9] text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">6‑month internship · Web development</p>
                        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">Front‑end design and back‑end integration</p>
                        <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                          <li className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#67e8f9] mt-1 sm:mt-2 text-xs sm:text-sm flex-shrink-0">•</span>
                            <span>Built e‑commerce admin panel (catalog and user management)</span>
                          </li>
                          <li className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#67e8f9] mt-1 sm:mt-2 text-xs sm:text-sm flex-shrink-0">•</span>
                            <span>Created responsive UI for small business with product listings and order management</span>
                          </li>
                          <li className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#67e8f9] mt-1 sm:mt-2 text-xs sm:text-sm flex-shrink-0">•</span>
                            <span>Optimized load times and implemented modern React patterns</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#06b6d4]/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg sm:text-2xl">🚀</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Freelance — Logistics App</h3>
                        <p className="text-[#67e8f9] text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">React + Vite + Tailwind</p>
                        <p className="text-gray-400 text-sm sm:text-base">Focus on performance and UX</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active === 'Education' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="group p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg sm:text-2xl">🎓</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">B.Tech in Agricultural Engineering</h3>
                        <p className="text-[#67e8f9] text-sm sm:text-base lg:text-lg mb-1">Nova College of Engineering & Technology</p>
                        <p className="text-gray-400 text-sm sm:text-base">2020–2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#06b6d4]/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg sm:text-2xl">📚</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Diploma in Agriculture</h3>
                        <p className="text-[#67e8f9] text-sm sm:text-base lg:text-lg mb-1">Nagayalanka Polytechnic</p>
                        <p className="text-gray-400 text-sm sm:text-base">2017–2020</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg sm:text-2xl">🏫</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">SSC (High School)</h3>
                        <p className="text-[#67e8f9] text-sm sm:text-base lg:text-lg mb-1">Krishna Veni Talent School</p>
                        <p className="text-gray-400 text-sm sm:text-base">2017</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
