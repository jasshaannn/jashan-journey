import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <div
        className="flex flex-col items-center"
        style={{ animation: 'fade-up 0.8s ease-out both' }}
      >
        <span className="mb-6 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
          Portfolio
        </span>

        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl">
          Hi, I&apos;m{' '}
          <span className="text-neon-cyan text-glow-cyan">Jashan</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          A student and builder riding the wave from{' '}
          <span className="text-foreground">Class 10</span> to{' '}
          <span className="text-foreground">college</span> — chasing curiosity,
          shipping projects, and learning out loud.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-neon-cyan px-7 py-3 font-medium text-primary-foreground shadow-glow-cyan transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-7 py-3 font-medium text-foreground transition-colors hover:border-neon-pink hover:text-neon-pink"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#journey"
        aria-label="Scroll to journey"
        className="absolute bottom-10 flex h-10 w-10 animate-float-slow items-center justify-center rounded-full border border-border text-muted-foreground"
      >
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}
