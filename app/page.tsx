import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection'
import { OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Rafsal Rahim — Systems & Infrastructure Engineer',
  description:
    'I design and build modern web experiences, and engineer the systems that power them—from frontend interfaces to scalable backend and blockchain-integrated applications.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CredibilitySection />
      <ServicesSection />
      <FeaturedWorkSection />
      <OpenSourceSection />
      <PhilosophySection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
