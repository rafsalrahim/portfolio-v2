'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none animate-pan-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          opacity: 0.35,
        }}
      />

      <div className="container-site relative w-full py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted">Available for freelance projects</span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="text-label mb-2"
          >
            Rafsal Rahim
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.25 },
              },
            }}
            className="font-display text-[clamp(2.8rem,8vw,6rem)] text-foreground mb-8 leading-[1.05] tracking-tight"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="block">Crafting elegant</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="block text-muted">systems & infrastructure.</motion.span>
          </motion.h1>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="text-muted-light text-lg md:text-xl leading-relaxed max-w-[52ch] mb-10"
          >
            I design and build modern web experiences, and engineer the systems that power
            them—from frontend interfaces to scalable backend and
            blockchain-integrated applications.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.48 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/work" className="btn btn-primary gap-2">
              View Work
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://github.com/rafsalrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary gap-2"
            >
              <Github size={15} />
              GitHub
            </a>
            <a href="#contact" className="btn btn-secondary gap-2">
              <Mail size={15} />
              Contact
            </a>
          </motion.div>

          {/* Tech strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-14 flex flex-wrap gap-2"
          >
            {['Go', 'Python', 'Solidity', 'Kubernetes', 'Terraform', 'Docker', 'AWS', 'Blockchain'].map(
              (tech) => (
                <span key={tech} className="tag-chip">
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  )
}
