import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

const principles = [
  {
    title: 'Ship first, iterate fast.',
    body:
      'Perfect is the enemy of deployed. I build to production with sensible defaults, then improve with real data.',
  },
  {
    title: 'Security is architecture.',
    body:
      'Not a checklist at the end. The right trust boundaries, least-privilege access, and encrypted paths are designed in from the start.',
  },
  {
    title: 'Infrastructure is code.',
    body:
      'If it can\'t be version-controlled and replayed, it\'s technical debt. Every environment I build is reproducible on day one.',
  },
  {
    title: 'Own the full stack.',
    body:
      'I don\'t hand off at the API boundary. I understand and am accountable for every layer—from the smart contract to the cloud bill.',
  },
]

export function PhilosophySection() {
  return (
    <section className="section bg-surface border-t border-border">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel>Engineering philosophy</SectionLabel>
            <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-6">
              How I think about building.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-[44ch]">
              Six years of shipping systems—from solo projects to multi-team
              infrastructure—has shaped a clear point of view on what makes
              software worth building.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-6 md:gap-8">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-muted-light pt-1 flex-shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{p.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
