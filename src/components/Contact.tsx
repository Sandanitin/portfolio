import React, { useState } from 'react'
import Container from './ui/Container'

const emailTo = 'sainithin95054@gmail.com'
const phone = '+91 9505492525'
const github = 'https://github.com/sandanithin7'
const linkedin = 'https://linkedin.com/in/sanda-nithin-308287288'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mailto = `mailto:${emailTo}?subject=Portfolio inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n(' + email + ')')}`
    window.location.href = mailto
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#67e8f9]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#06b6d4]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Container>
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-5 w-1.5 rounded-full bg-[#67e8f9] animate-pulse"/>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] animate-gradient-x">Touch</span>
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Have a project or question? Let's talk and bring your ideas to life.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          {/* Left info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-300">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${emailTo}`} className="text-white hover:text-[#67e8f9] transition-colors">{emailTo}</a>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-300">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href={`tel:${phone.replace(/\s/g,'')}`} className="text-white hover:text-[#67e8f9] transition-colors">{phone}</a>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-300">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center">
                  <span className="text-white text-xl">🔗</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Social</p>
                  <div className="flex gap-4 mt-1">
                    <a href={github} className="text-white hover:text-[#67e8f9] transition-colors" target="_blank" rel="noreferrer">GitHub</a>
                    <a href={linkedin} className="text-white hover:text-[#67e8f9] transition-colors" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#67e8f9]/20 to-[#06b6d4]/20 border border-[#67e8f9]/30">
              <a href="https://drive.google.com/uc?export=download&id=1xC94_CNhjHVx035jbUH0aECrQv49qIRk" download="Sanda-Nithin-Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:from-[#22d3ee] hover:to-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#67e8f9]/30 transition-all duration-500 hover-lift">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#67e8f9] focus:border-transparent transition-all duration-300 hover:bg-white/15"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#67e8f9] focus:border-transparent transition-all duration-300 hover:bg-white/15"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Project Details</label>
                <textarea
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#67e8f9] focus:border-transparent transition-all duration-300 resize-none hover:bg-white/15"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:from-[#22d3ee] hover:to-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            {/* Additional info */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#67e8f9]/10 to-[#06b6d4]/10 border border-[#67e8f9]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Quick Response</p>
                  <p className="text-gray-400 text-xs">I typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
