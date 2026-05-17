import { credibilityStats } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

export function CredibilitySection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-site py-12 md:py-16">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {credibilityStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col gap-1">
                <span
                  className="text-display text-[2.25rem] md:text-[2.75rem] text-foreground leading-none"
                >
                  {stat.value}
                </span>
                <span className="text-sm text-muted leading-snug">{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
