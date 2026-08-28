import { WavyBackground } from '@/components/wavy-background'
import { HeroSection } from '@/components/hero-section'
import { JourneySection } from '@/components/journey-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <WavyBackground />
      <HeroSection />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
