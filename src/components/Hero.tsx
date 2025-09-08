import React from 'react'
import Container from './ui/Container'
import NithinImg from '../assets/nithin.jpeg'

const Hero: React.FC = () => {
  const onImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget
    if (!img.src.endsWith('/avatar.svg')) {
      img.src = '/avatar.svg'
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Creative geometric background */}
      <div className="absolute inset-0 -z-10">
        {/* Diagonal lines (hidden on mobile to remove lower color) */}
        <div className="hidden sm:block absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#67e8f9]/20 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent transform rotate-6"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent transform -rotate-3"></div>
        </div>
        
        {/* Floating geometric shapes - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 border border-[#67e8f9]/20 rotate-45 animate-spin-slow"></div>
        <div className="hidden sm:block absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-32 left-1/4 w-40 h-40 border-2 border-[#3b82f6]/15 rounded-full animate-pulse delay-1000"></div>
        <div className="hidden sm:block absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-tr from-[#67e8f9]/15 to-transparent transform rotate-12 animate-bounce"></div>
      </div>
      
      <Container>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-screen py-12 sm:py-16 lg:py-20">
          {/* Left content - Creative layout */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-1">
            {/* Creative tag */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-lg blur-sm opacity-50"></div>
                <div className="relative px-4 sm:px-6 py-2 sm:py-3 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <span className="text-[#67e8f9] font-semibold text-xs sm:text-sm tracking-wider uppercase">Full‑stack Developer</span>
                </div>
              </div>
            </div>
            
            {/* Creative heading with geometric elements */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"></div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-white leading-none">
                  Hi, I'm
                </h1>
              </div>
              
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] via-[#06b6d4] to-[#3b82f6] animate-gradient-x">
                    Sanda Nithin
                  </span>
                </h1>
                {/* Creative underline */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-3/4 h-1 sm:h-2 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-full"></div>
              </div>
            </div>
            
            {/* Creative description */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
                I design and build <span className="text-[#67e8f9] font-semibold">fast</span>, <span className="text-[#06b6d4] font-semibold">accessible</span> web applications.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I work across the stack with React, TypeScript, Node.js and Tailwind CSS—focusing on clean architecture, delightful UI, and measurable performance.
              </p>
            </div>
            
            {/* Creative CTA section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 text-center">
                  <span className="relative z-10">See My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a href="https://drive.google.com/uc?export=download&id=1xC94_CNhjHVx035jbUH0aECrQv49qIRk" download="Sanda-Nithin-Resume.pdf" className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#67e8f9] text-[#67e8f9] font-semibold rounded-lg hover:bg-[#67e8f9] hover:text-black transition-all duration-300 hover:scale-105 text-center">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </span>
                </a>
              </div>
              
              {/* Creative stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#67e8f9]">2+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#06b6d4]">10+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3b82f6]">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right content - Creative image layout */}
          <div className="lg:col-span-5 relative order-2 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Creative geometric frame */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 border-2 border-[#67e8f9]/30 rotate-12 rounded-2xl"></div>
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 border border-[#06b6d4]/20 rotate-6 rounded-2xl"></div>
              
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={NithinImg}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  onError={onImgError}
                />
              </div>
              
              {/* Creative floating elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#67e8f9] to-[#06b6d4] rounded-full animate-bounce"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-full animate-bounce delay-1000"></div>
              <div className="hidden sm:block absolute top-1/2 -right-6 sm:-right-8 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-[#3b82f6] to-[#67e8f9] rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
