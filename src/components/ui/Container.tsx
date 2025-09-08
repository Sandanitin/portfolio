import React from 'react'

type Props = React.PropsWithChildren<{ className?: string }>

const Container: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`mx-auto max-w-screen-xl px-4 ${className}`}>{children}</div>
  )
}

export default Container
