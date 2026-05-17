import { servicePillars } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { HoverCard } from '@/components/ui/HoverCard'

export function ServicesSection() {
  return (
    <section className="section bg-background">
      <div className="container-site">
        <FadeIn blur direction="up">
          <SectionLabel>What I build</SectionLabel>
          <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-4">
            End-to-end, not just one layer.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-[52ch] mb-14 leading-relaxed">
            I work across the full stack—from smart contracts and APIs to the cloud
            infrastructure that keeps them running at scale.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {servicePillars.map((pillar) => (
            <StaggerItem key={pillar.number}>
              <HoverCard className="bg-surface p-8 md:p-10 h-full flex flex-col gap-5">
                <span className="font-mono text-xs text-muted-light">{pillar.number}</span>

                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed flex-1">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
