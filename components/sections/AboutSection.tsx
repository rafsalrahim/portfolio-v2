'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="section bg-background pt-8 pb-32">
      {/* Subtle structural banner separating hero from about */}
      <div className="container-site mb-24">
        <div className="w-full h-px bg-gradient-to-r from-border/10 via-border to-border/10" />
      </div>

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn blur direction="up" delay={0.1}>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
                {/* Soft backdrop glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-2xl blur-2xl -z-10" />
                
                {/* Image */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-surface-elevated shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                  <Image
                    src="/portrait.png"
                    alt="Rafsal Rahim Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Typography Column */}
          <div className="lg:col-span-7">
            <FadeIn blur direction="up" delay={0.2}>
              <SectionLabel>About Me</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] text-foreground leading-tight tracking-tight mb-8">
                Building systems that <br className="hidden md:block" />
                scale gracefully.
              </h2>
              
              <div className="space-y-6 text-muted text-lg leading-relaxed max-w-[54ch]">
                <p>
                  I'm Rafsal, a systems and infrastructure engineer obsessed with the space where robust backend architecture meets seamless user experience. With over six years in the industry, I've shipped everything from high-throughput APIs to decentralised blockchain protocols.
                </p>
                <p>
                  My philosophy is simple: technology should be invisible. Whether I'm configuring Kubernetes clusters or writing smart contracts, the end goal is to create systems so resilient and elegant that the user never has to think about them.
                </p>
                <p>
                  When I'm not architecting cloud infrastructure, I'm usually contributing to open-source tooling, writing technical deep dives, or exploring the bleeding edge of decentralised web infrastructure.
                </p>
              </div>

              {/* Signature or subtle personal touch */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <span className="font-display text-2xl italic text-muted-light">Rafsal Rahim</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
