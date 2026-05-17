'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
            {/* Logo / Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Rafsal Rahim — Home"
            >
              <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 group-hover:scale-95 transition-transform duration-200">
                <span className="text-background text-xs font-semibold tracking-tight">R</span>
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">
                Rafsal Rahim
              </span>
            </Link>

            {/* Desktop nav */}
            <nav 
              className="hidden md:flex items-center gap-1" 
              aria-label="Main navigation"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {links.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href) && link.href !== '/#contact'
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150 z-10 ${
                      isActive || hoveredPath === link.href
                        ? 'text-foreground'
                        : 'text-muted'
                    }`}
                  >
                    {hoveredPath === link.href && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-surface-elevated/60 rounded-md -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    {isActive && (
                      <div className="absolute inset-0 bg-surface-elevated rounded-md -z-20" />
                    )}
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="mailto:hello@rafsalrahim.dev"
                className="ml-3 btn btn-primary text-sm px-4 py-2 min-h-[38px] rounded-md"
              >
                Hire me
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 rounded-md text-muted hover:text-foreground hover:bg-surface-elevated transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-background/95 backdrop-blur-sm md:hidden"
          >
            <nav className="container-site pt-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3.5 text-lg font-medium text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 px-4"
              >
                <a
                  href="mailto:hello@rafsalrahim.dev"
                  className="btn btn-primary w-full text-base"
                >
                  Hire me
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
