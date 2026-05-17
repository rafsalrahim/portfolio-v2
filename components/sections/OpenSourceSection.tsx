import { ArrowUpRight, Star } from 'lucide-react'
import { openSourceProjects } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

const languageColors: Record<string, string> = {
  Python: '#3776AB',
  Go:     '#00ADD8',
  HCL:    '#7B42BC',
}

export function OpenSourceSection() {
  return (
    <section className="section bg-background border-t border-border">
      <div className="container-site">
        <FadeIn>
          <SectionLabel>Open source</SectionLabel>
          <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-4">
            Tools I've open-sourced.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-[48ch] mb-12 leading-relaxed">
            Problems I solved, packaged and shared. Infrastructure and blockchain tooling that others can build on.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {openSourceProjects.map((project) => (
            <StaggerItem key={project.name}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex flex-col gap-4 h-full group"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-sm font-medium text-foreground">
                    {project.name}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-light group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5"
                  />
                </div>

                <p className="text-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: languageColors[project.language] || '#888' }}
                    />
                    <span className="text-xs text-muted">{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Star size={11} />
                    {project.stars}
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-8">
          <a
            href="https://github.com/rafsalrahim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
          >
            All repositories on GitHub
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
