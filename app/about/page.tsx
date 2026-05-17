import type { Metadata } from 'next'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { skills } from '@/lib/data'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story behind the engineer—systems, infrastructure, blockchain, and the path from automation to confidential computing.',
}

const timeline = [
  {
    period: '2018 – 2020',
    title: 'Platform & Automation',
    body: 'Started by automating the boring stuff—Bash scripts became Ansible playbooks, manual deployments became pipelines. Learned that the highest-leverage work in any engineering team is removing toil.',
  },
  {
    period: '2020 – 2022',
    title: 'Cloud Infrastructure & Kubernetes',
    body: 'Moved into cloud-native infrastructure full time. Kubernetes, Helm, Terraform—building platforms that teams could deploy to confidently, not cautiously. Infrastructure-as-code became a non-negotiable.',
  },
  {
    period: '2022 – 2023',
    title: 'Blockchain & Distributed Systems',
    body: 'Got deep into Web3. Designed and deployed smart contracts, built Go services for on-chain integrations, and started thinking seriously about trustless systems and what decentralised infrastructure actually looks like in production.',
  },
  {
    period: '2023 – Now',
    title: 'Confidential Computing & Freelance',
    body: 'The frontier I\'m most excited about: hardware-enforced privacy for cloud workloads. AWS Nitro Enclaves, TEEs, remote attestation—cryptographic guarantees that even the cloud provider can\'t read your data. Running this work as a freelance practice, taking on select infrastructure and blockchain projects.',
  },
]

const workingStyle = [
  {
    title: 'I start with constraints.',
    body: 'Before writing a line of code, I want to understand the security model, the scale requirements, and the operational reality. The design follows.',
  },
  {
    title: 'I document as I build.',
    body: 'Architecture decisions, runbooks, API contracts—written in real time, not as an afterthought. Future-me and future-teammates both benefit.',
  },
  {
    title: 'I prefer boring technology.',
    body: 'New doesn\'t mean better. I reach for proven tools and save novelty for the problems that genuinely require it.',
  },
  {
    title: 'I communicate like an engineer, not a consultant.',
    body: 'Precise, direct, and honest about trade-offs. If something has a risk, I\'ll name it. If a deadline is unrealistic, I\'ll say so.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section pb-12 bg-background">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-label mb-3">About</p>
              <h1 className="text-display text-[clamp(2.4rem,6vw,4rem)] text-foreground leading-tight mb-8">
                Engineer by instinct,
                <br />
                <span className="italic text-muted">builder by choice.</span>
              </h1>
              <div className="flex flex-col gap-4 text-[#57534e] text-base md:text-lg leading-relaxed max-w-[58ch]">
                <p>
                  I'm Rafsal Rahim—a systems and infrastructure engineer with six years of
                  experience designing and operating software that runs in production under real
                  load, with real security requirements.
                </p>
                <p>
                  My work sits at the intersection of cloud infrastructure, backend systems, and
                  blockchain engineering. I'm most effective when the problem requires thinking
                  across layers: from the smart contract to the Kubernetes cluster to the
                  Terraform module that provisions it all.
                </p>
                <p>
                  I run an independent engineering practice, working with startups, growth-stage
                  companies, and technical teams who need someone who can take ownership of
                  complex infrastructure problems—not just execute tickets.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-surface border-t border-border">
        <div className="container-site">
          <FadeIn>
            <SectionLabel>The path here</SectionLabel>
            <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-12">
              From automation to enclaves.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="absolute left-[10.5rem] top-0 bottom-0 w-px bg-[#e7e5e4] hidden md:block" />

            <div className="flex flex-col gap-10 md:gap-12">
              {timeline.map((item, i) => (
                <FadeIn key={item.period} delay={i * 0.08}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                    {/* Period */}
                    <div className="md:w-40 flex-shrink-0">
                      <span className="font-mono text-xs text-muted-light">{item.period}</span>
                    </div>

                    {/* Dot — desktop */}
                    <div className="hidden md:flex items-start justify-center w-4 flex-shrink-0 relative -ml-2 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#e7e5e4] border-2 border-white ring-1 ring-[#d6d3d1] flex-shrink-0" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed max-w-[55ch]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder angle */}
      <section className="section bg-background border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <SectionLabel>Independent practice</SectionLabel>
              <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-6">
                Engineering as a founder.
              </h2>
              <div className="flex flex-col gap-4 text-muted text-sm md:text-base leading-relaxed">
                <p>
                  Running an independent practice isn't just a business model—it's a lens.
                  When you're accountable for the outcome, not just the output, you make
                  different decisions about architecture, dependencies, and operational
                  complexity.
                </p>
                <p>
                  I've learned to think like an owner: what will this cost to operate in
                  a year? What happens when the team changes? What's the security posture
                  if this gets popular? These questions don't come from a checklist—they
                  come from having been the one on call.
                </p>
                <p>
                  I work with founders, technical leads, and product teams who want a
                  senior engineer who can think about the business problem, not just the
                  implementation detail.
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="card p-6 md:p-8">
                  <p className="text-label mb-3">What I take on</p>
                  <ul className="flex flex-col gap-3 text-sm text-[#57534e]">
                    {[
                      'Cloud infrastructure design and implementation',
                      'Blockchain and smart contract engineering',
                      'Platform and DevOps transformation',
                      'Confidential computing architecture',
                      'Technical advisory and architecture review',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#a8a29e] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="card p-6 md:p-8">
                  <p className="text-label mb-3">Availability</p>
                  <p className="text-sm text-[#57534e] leading-relaxed mb-4">
                    Currently open to new projects. I take on 1–2 engagements at a time to
                    ensure full focus. Typical engagements are 3–6 months, with
                    ongoing retainers available.
                  </p>
                  <a
                    href="mailto:hello@rafsalrahim.dev"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-[#1c1917] pb-0.5 hover:text-[#44403c] hover:border-[#44403c] transition-colors group"
                  >
                    Start a conversation
                    <ArrowUpRight
                      size={12}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section bg-surface border-t border-border">
        <div className="container-site">
          <FadeIn>
            <SectionLabel>Working style</SectionLabel>
            <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-12">
              How I work.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {workingStyle.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="flex gap-4">
                  <span className="font-mono text-xs text-muted-light pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section bg-background border-t border-border">
        <div className="container-site">
          <FadeIn>
            <SectionLabel>Technical skills</SectionLabel>
            <h2 className="text-display text-[clamp(1.9rem,4vw,2.75rem)] text-foreground leading-tight mb-10">
              The toolkit.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag-chip">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Connect */}
      <section className="section bg-surface border-t border-border">
        <div className="container-site">
          <FadeIn>
            <div className="max-w-xl">
              <SectionLabel>Connect</SectionLabel>
              <h2 className="text-display text-[clamp(1.9rem,4vw,2.5rem)] text-foreground leading-tight mb-6">
                Find me online.
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    href: 'https://github.com/rafsalrahim',
                    label: 'GitHub — @rafsalrahim',
                    icon: Github,
                    external: true,
                  },
                  {
                    href: 'https://linkedin.com/in/rafsalrahim',
                    label: 'LinkedIn — Rafsal Rahim',
                    icon: Linkedin,
                    external: true,
                  },
                  {
                    href: 'mailto:hello@rafsalrahim.dev',
                    label: 'hello@rafsalrahim.dev',
                    icon: Mail,
                    external: false,
                  },
                ].map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 text-sm text-[#57534e] hover:text-foreground transition-colors group"
                  >
                    <Icon size={15} className="text-muted-light" />
                    {label}
                    {external && (
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-muted-light"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
