import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export function ContactSection() {
  return (
    <section id="contact" className="section bg-foreground">
      <div className="container-site">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-label text-muted-light mb-4">Get in touch</p>
            <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[#fafaf9] leading-tight mb-6">
              Let's build something that lasts.
            </h2>
            <p className="text-muted-light text-base md:text-lg leading-relaxed mb-10 max-w-[48ch]">
              Whether you're looking for a systems engineer to join your team, a technical
              co-founder for your startup, or a freelance infrastructure partner—I'd like
              to hear about what you're building.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <a
              href="mailto:hello@rafsalrahim.dev"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-background text-foreground rounded-md text-sm font-semibold hover:bg-surface transition-colors mb-12 min-h-[48px]"
            >
              <Mail size={15} />
              hello@rafsalrahim.dev
            </a>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-6 pt-8 border-t border-[#2d2926]">
              <a
                href="https://github.com/rafsalrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-background transition-colors group"
              >
                <Github size={15} />
                GitHub
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
              <a
                href="https://linkedin.com/in/rafsalrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-background transition-colors group"
              >
                <Linkedin size={15} />
                LinkedIn
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
              <a
                href="mailto:hello@rafsalrahim.dev"
                className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-background transition-colors"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
