import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { HoverCard } from '@/components/ui/HoverCard'

const featured = projects.filter((p) => p.featured).slice(0, 3)

export function FeaturedWorkSection() {
  return (
    <section className="section bg-background border-t border-border">
      <div className="container-site">
        <FadeIn blur className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight">
              Systems I&apos;ve shipped.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors group flex-shrink-0"
          >
            All projects
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-4">
          {featured.map((project, i) => (
            <StaggerItem key={project.slug}>
              <HoverCard as="article" className="card p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Index */}
                  <span className="font-mono text-xs text-muted-light md:pt-1 flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-light font-mono sm:ml-2">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4 max-w-[60ch]">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tag-chip">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="tag-chip">+{project.stack.length - 5}</span>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/work#${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors group/link"
                    >
                      <span>Read more</span>
                      <ArrowUpRight
                        size={13}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
