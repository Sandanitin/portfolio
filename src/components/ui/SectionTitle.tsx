import React from 'react'

type Props = { title: string; subtitle?: string; className?: string }

const SectionTitle: React.FC<Props> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-5 w-1.5 rounded-full bg-[#67e8f9]"/>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {title.includes(' ') ? (
            <>
              {title.split(' ').map((word, index) => 
                index === title.split(' ').length - 1 ? (
                  <span key={index} className="text-[#67e8f9]">{word}</span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </>
          ) : (
            title
          )}
        </h2>
      </div>
      {subtitle ? <p className="mt-4 text-xl text-white/90">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
