'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ElementType, ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function HoverCard({
  children,
  className = '',
  as: Component = 'div',
}: HoverCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Component
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {/* Content */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </Component>
  )
}
