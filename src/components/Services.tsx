import React from 'react'
import Container from './ui/Container'

const services = [
  {
    title: 'Web Development',
    desc: 'High‑quality, responsive websites with clean code and strong performance.',
    icon: '💻',
    featured: true,
  },
  {
    title: 'UI/UX Design',
    desc: 'Interface design with wireframes, reusable components, and design systems.',
    icon: '🎨',
    featured: false,
  },
  {
    title: 'App Interfaces',
    desc: 'Mobile‑first screens and prototypes tailored for iOS and Android.',
    icon: '📱',
    featured: false,
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Creative background with unique patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Creative geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-[#67e8f9]/20 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 border border-[#3b82f6]/20 transform rotate-12 animate-bounce"></div>
        
        {/* Creative wave patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#67e8f9]/20 to-transparent transform -rotate-6"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent transform rotate-3"></div>
        </div>
      </div>
      
      <Container>
        {/* Creative section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"></div>
              <span className="text-[#67e8f9] font-semibold text-sm tracking-wider uppercase">Services</span>
              <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]">Create</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative solutions to bring your digital ideas to life
          </p>
        </div>

        {/* Creative services layout - Hexagonal style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={s.title}
              className={`group relative ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className={`relative p-8 rounded-3xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                s.featured ? 'ring-2 ring-[#67e8f9]/30' : ''
              }`}>
                {/* Creative icon container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{s.icon}</span>
                  </div>
                  
                  {/* Creative floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] rounded-full animate-bounce delay-1000"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#67e8f9] transition-colors duration-300">
                  {s.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-8 leading-relaxed">
                  {s.desc}
                </p>
                
                {/* Creative features grid */}
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {s.title === 'Web Development' && (
                    <>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#67e8f9] rounded-full"></div>
                        <span className="text-sm text-gray-300">Responsive Design</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full"></div>
                        <span className="text-sm text-gray-300">Performance Optimization</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                        <span className="text-sm text-gray-300">Modern Frameworks</span>
                      </div>
                    </>
                  )}
                  {s.title === 'UI/UX Design' && (
                    <>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#67e8f9] rounded-full"></div>
                        <span className="text-sm text-gray-300">User Research</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full"></div>
                        <span className="text-sm text-gray-300">Wireframing</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                        <span className="text-sm text-gray-300">Prototyping</span>
                      </div>
                    </>
                  )}
                  {s.title === 'App Interfaces' && (
                    <>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#67e8f9] rounded-full"></div>
                        <span className="text-sm text-gray-300">Mobile-First</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full"></div>
                        <span className="text-sm text-gray-300">Cross-Platform</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                        <span className="text-sm text-gray-300">Native Feel</span>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Creative CTA */}
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] text-white font-semibold rounded-xl hover:from-[#06b6d4] hover:to-[#3b82f6] transition-all duration-300 hover:scale-105"
                  >
                    <span>Get Started</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Creative call to action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
                <p className="text-gray-300">Let's discuss your project and bring your vision to life</p>
              </div>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] text-white font-bold rounded-xl hover:from-[#06b6d4] hover:to-[#3b82f6] transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
