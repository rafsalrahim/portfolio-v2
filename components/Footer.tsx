import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

const socialLinks = [
  {
    href: 'https://github.com/rafsalrahim',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/rafsalrahim',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:hello@rafsalrahim.dev',
    label: 'Email',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-[#fafaf9] text-[10px] font-semibold">R</span>
              </div>
              <span className="text-sm font-medium text-foreground">Rafsal Rahim</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[22ch]">
              Building systems that scale. From code to cloud.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-label mb-4">Get in touch</p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors group"
                    >
                      <Icon size={13} />
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-light">
            © {new Date().getFullYear()} Rafsal Rahim. All rights reserved.
          </p>
          <p className="text-xs text-muted-light">
            Built with Next.js · Deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
