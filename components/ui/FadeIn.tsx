'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scaleUp' | 'scaleDown'
  className?: string
  once?: boolean
  duration?: number
  blur?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  duration = 0.55,
  blur = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const baseHidden = { opacity: 0, ...(blur ? { filter: 'blur(8px)' } : {}) }
  const baseVisible = { opacity: 1, ...(blur ? { filter: 'blur(0px)' } : {}) }

  const directions = {
    up:    { hidden: { y: 20, ...baseHidden }, visible: { y: 0, ...baseVisible } },
    down:  { hidden: { y: -20, ...baseHidden }, visible: { y: 0, ...baseVisible } },
    left:  { hidden: { x: 24, ...baseHidden }, visible: { x: 0, ...baseVisible } },
    right: { hidden: { x: -24, ...baseHidden }, visible: { x: 0, ...baseVisible } },
    none:  { hidden: { ...baseHidden }, visible: { ...baseVisible } },
    scaleUp: { hidden: { scale: 0.96, ...baseHidden }, visible: { scale: 1, ...baseVisible } },
    scaleDown: { hidden: { scale: 1.04, ...baseHidden }, visible: { scale: 1, ...baseVisible } },
  }

  return (
    <motion.div
      ref={ref}
      variants={directions[direction]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { y: 18, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
