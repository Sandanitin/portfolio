import React from 'react'
import Container from './ui/Container'

type Project = {
  title: string
  description: string
  image: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'E‑commerce Admin Panel (Beaten)',
    description: 'Frontend admin panel for an e‑commerce platform: catalog and category management.',
    image: '/image1.png',
    link: 'https://beatenfrontend.onrender.com/',
  },
  {
    title: 'Ma Amma Ruchulu',
    description: 'Full‑stack app for a traditional food business with listings and orders.',
    image: '/image2.png',
    link: 'https://picklesworkproject.vercel.app',
  },
  {
    title: 'Digital Billionaire',
    description: 'Marketing site built with Vite + React; responsive and fast.',
    image: '/image3.png',
    link: 'https://digital-billionaire-yd4z.vercel.app',
  },
  {
    title: 'Logistics Management App',
    description: 'Freelance project: scalable, user‑friendly logistics workflows and tracking.',
    image: '/image4.png',
    link: 'https://logistics-project-sigma.vercel.app',
  },
]

const projectAltTexts: Record<string, string> = {
  'E‑commerce Admin Panel (Beaten)': 'E-commerce admin panel dashboard built with React showing product catalog management, category organization, and inventory control features',
  'Ma Amma Ruchulu': 'Ma Amma Ruchulu traditional food ordering application featuring authentic Indian pickles and homemade products with modern e-commerce functionality',
  'Digital Billionaire': 'Digital Billionaire marketing website showcasing modern UI design with responsive layout built using Vite and React framework',
  'Logistics Management App': 'Logistics management application dashboard displaying shipment tracking, workflow management, and real-time delivery status monitoring system',
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-32 relative overflow-hidden">
      {/* Creative background with geometric patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Creative geometric shapes - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-40 h-40 border-2 border-[#67e8f9]/20 transform rotate-45 animate-spin-slow"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-24 h-24 border border-[#3b82f6]/20 transform rotate-12 animate-bounce"></div>
        
        {/* Creative diagonal patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-2/3 h-px bg-gradient-to-r from-transparent via-[#67e8f9]/20 to-transparent transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent transform rotate-6"></div>
        </div>
      </div>
      
      <Container>
        {/* Creative section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"></div>
              <span className="text-[#67e8f9] font-semibold text-xs sm:text-sm tracking-wider uppercase">Portfolio</span>
              <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]">Creative Work</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Recent projects that showcase my skills and creativity in web development
          </p>
        </div>

        {/* Creative projects grid - Masonry style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, index) => (
            <div 
              key={p.title}
              className={`group relative ${index % 3 === 1 ? 'sm:mt-4 lg:mt-8' : ''} ${index % 3 === 2 ? 'sm:mt-8 lg:mt-16' : ''}`}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="block relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl"
              >
                {/* Creative image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={projectAltTexts[p.title]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Creative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Creative floating elements - hidden on mobile */}
                  <div className="hidden sm:block absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-full animate-bounce"></div>
                  <div className="hidden sm:block absolute bottom-4 left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-full animate-bounce delay-1000"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#67e8f9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* External link icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                {/* Creative content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#67e8f9] transition-colors duration-300 leading-tight">
                      {p.title}
                    </h3>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-full animate-pulse flex-shrink-0 ml-2"></div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {p.description}
                  </p>
                  
                  {/* Creative tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#67e8f9]/20 to-[#06b6d4]/20 text-[#67e8f9] text-xs sm:text-sm font-medium rounded-full border border-[#67e8f9]/30">
                      React
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 text-[#06b6d4] text-xs sm:text-sm font-medium rounded-full border border-[#06b6d4]/30">
                      TypeScript
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#3b82f6]/20 to-[#67e8f9]/20 text-[#3b82f6] text-xs sm:text-sm font-medium rounded-full border border-[#3b82f6]/30">
                      Tailwind
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Creative call to action */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="inline-block">
            <a 
              href="#contact" 
              className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <span>Start Your Project</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
