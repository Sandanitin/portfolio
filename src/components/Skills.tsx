import React from 'react'
import Container from './ui/Container'

// Skill data with levels and categories
const skills = {
  'Frontend': [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 92, icon: '🎨' },
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Bootstrap', level: 85, icon: '🅱️' },
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 95, icon: '🌀' },
    { name: 'Vite', level: 85, icon: '⚡' }
  ],
  'Backend': [
    { name: 'Node.js (Basic)', level: 70, icon: '🟢' },
    { name: 'MongoDB (Basic)', level: 65, icon: '🍃' }
  ],
  'Tools & Others': [
    { name: 'Git', level: 90, icon: '🌿' },
    { name: 'GitHub', level: 88, icon: '🐙' },
    { name: 'Visual Studio Code', level: 92, icon: '🧰' }
  ],
  'Soft Skills': [
    { name: 'Problem‑solving', level: 90, icon: '🧩' },
    { name: 'Time Management', level: 85, icon: '⏱️' }
  ]
}

// Creative Skill Orb component
const SkillOrb: React.FC<{ name: string; level: number; icon: string; delay: number }> = ({ name, level, icon, delay }) => {
  const size = Math.max(50, level * 0.6) // Smaller base size for mobile
  
  return (
    <div 
      className="relative group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Orb container */}
      <div 
        className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[#67e8f9]/20 to-[#06b6d4]/20 border-2 border-[#67e8f9]/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#67e8f9] group-hover:shadow-lg group-hover:shadow-[#67e8f9]/25"
        style={{ 
          width: `${Math.max(50, size)}px`, 
          height: `${Math.max(50, size)}px`,
          animation: `float 3s ease-in-out infinite ${delay}ms`
        }}
      >
        {/* Icon */}
        <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        
        {/* Level indicator ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{
          background: `conic-gradient(from 0deg, #67e8f9 ${level * 3.6}deg, transparent ${level * 3.6}deg)`,
          mask: 'radial-gradient(circle at center, transparent 60%, black 60%)',
          WebkitMask: 'radial-gradient(circle at center, transparent 60%, black 60%)'
        }}></div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#67e8f9]/20 to-[#06b6d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </div>
      
      {/* Skill name and level */}
      <div className="text-center">
        <div className="text-white font-semibold text-xs sm:text-sm mb-1 group-hover:text-[#67e8f9] transition-colors duration-300">
          {name}
        </div>
        <div className="text-[#67e8f9] text-xs font-bold">
          {level}%
        </div>
      </div>
    </div>
  )
}

// Creative Skill Category component
const SkillCategory: React.FC<{ 
  title: string; 
  skills: Array<{ name: string; level: number; icon: string }>; 
  icon: string;
  delay: number;
}> = ({ title, skills, icon, delay }) => {
  return (
    <div 
      className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#67e8f9]/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Category header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="relative inline-block">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-[#67e8f9] to-[#06b6d4] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-[#67e8f9]/25">
            <span className="text-xl sm:text-3xl">{icon}</span>
          </div>
          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#67e8f9]/20 to-[#06b6d4]/20 rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] mx-auto rounded-full"></div>
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillOrb
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  )
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Creative geometric background */}
      <div className="absolute inset-0 -z-10">
        {/* Hexagonal patterns - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 border border-[#67e8f9]/20 rotate-45 animate-spin-slow"></div>
        <div className="hidden sm:block absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-[#06b6d4]/10 to-transparent rounded-full animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-32 left-1/4 w-40 h-40 border-2 border-[#3b82f6]/15 rounded-full animate-pulse delay-1000"></div>
        <div className="hidden sm:block absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-tr from-[#67e8f9]/15 to-transparent transform rotate-12 animate-bounce"></div>
        
        {/* Diagonal lines - simplified for mobile */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#67e8f9]/20 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent transform rotate-6"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent transform -rotate-3"></div>
        </div>
      </div>
      
      <Container>
        {/* Creative section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] via-[#06b6d4] to-[#3b82f6] animate-gradient-x">
              Skills
            </h2>
            <div className="w-8 sm:w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#67e8f9]"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Creative skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <SkillCategory
            title="Frontend"
            skills={skills.Frontend}
            icon="🎨"
            delay={0}
          />
          <SkillCategory
            title="Backend"
            skills={skills.Backend}
            icon="⚙️"
            delay={200}
          />
          <SkillCategory
            title="Tools & Others"
            skills={skills['Tools & Others']}
            icon="🛠️"
            delay={400}
          />
          <SkillCategory
            title="Soft Skills"
            skills={skills['Soft Skills']}
            icon="🧠"
            delay={600}
          />
        </div>

        {/* Creative learning section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#67e8f9]/20 to-[#06b6d4]/20 rounded-2xl sm:rounded-3xl blur-lg opacity-50"></div>
            <div className="relative p-4 sm:p-6 lg:p-8 bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#67e8f9]/10">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-lg sm:text-2xl">🚀</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Always Learning</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2">
                I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
                Currently diving deep into advanced React patterns, microservices architecture, and cloud technologies.
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center gap-3 sm:gap-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#67e8f9] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#06b6d4] rounded-full animate-pulse delay-300"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b82f6] rounded-full animate-pulse delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills