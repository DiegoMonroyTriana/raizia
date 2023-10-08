'use client';

import 'atropos/css'
import Atropos from 'atropos/react'

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <Atropos
      id="card"
      className='block max-w-fit h-auto mx-auto bg-black/5 shadow-xl rounded-2xl [box-sizing:border-box]'
      rotateXMax={5}
      rotateYMax={5}
    >
      <section className={`block h-full overflow-hidden opacity-100 rounded-2xl transition duration-500 ease-in-out`}>
        {children}
      </section>
    </Atropos>
  )
}

export default Card;
