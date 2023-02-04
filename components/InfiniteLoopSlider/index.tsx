import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  duration: number,
  reverse: boolean
}

const InfinieLoopSlider = ({ children, duration, reverse = false }: Props) => {
  return (
    <div className='loop-slider'>
      <div className='
         inner
      ' style={{
          'animationDuration': `${duration}ms`,
          'animationDirection': reverse ? 'reverse' : 'normal'
        }}>
        {children}
        {children}

      </div>
    </div>
  )
}

export default InfinieLoopSlider