import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

const projects = [
  {
    name: 'Nebula',
    tagline: 'Task manager',
    description:
      'A focus-first task manager with boards, streaks, and a calm dark UI. Built to make planning feel effortless instead of overwhelming.',
    image: '/projects/project-nebula.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    accent: 'cyan',
  },
  {
    name: 'Pulse',
    tagline: 'Weather app',
    description:
      'A glassy, location-aware weather app with hourly forecasts and smooth animated transitions. Fast, minimal, and genuinely pleasant to check.',
    image: '/projects/project-pulse.png',
    tags: ['React', 'API', 'Framer Motion'],
    accent: 'pink',
  },
  {
    name: 'Orbit',
    tagline: 'AI chat',
    description:
      'An AI assistant with a clean chat interface, code highlighting, and streaming responses. My playground for learning how to build with LLMs.',
    image: '/projects/project-orbit.png',
    tags: ['AI SDK', 'Next.js', 'Streaming'],
    accent: 'violet',
  },
] as const

const ring = {
  cyan: 'hover:border-neon-cyan/60 hover:shadow-glow-cyan',
  pink: 'hover:border-neon-pink/60 hover:shadow-glow-pink',
  violet: 'hover:border-neon-violet/60',
} as const

const chip = {
  cyan: 'text-neon-cyan',
  pink: 'text-neon-pink',
  violet: 'text-neon-violet',
} as const

export function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
          Things I&apos;ve Built
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${ring[p.accent]}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image || '/placeholder.svg'}
                alt={`${p.name} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {p.name}
                </h3>
                <span
                  className={`font-mono text-xs uppercase tracking-wider ${chip[p.accent]}`}
                >
                  {p.tagline}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" /> Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
