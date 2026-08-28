import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  {
    label: 'GitHub',
    handle: '@jasshaannn',
    href: 'https://github.com/jasshaannn',
    Icon: GithubIcon,
    accent: 'cyan',
  },
  {
    label: 'Instagram',
    handle: '@jasshaannn',
    href: 'https://instagram.com/jasshaannn',
    Icon: InstagramIcon,
    accent: 'pink',
  },
  {
    label: 'LinkedIn',
    handle: 'in/jashan',
    href: '#', // TODO: replace with your LinkedIn URL
    Icon: LinkedinIcon,
    accent: 'violet',
  },
] as const

const hover = {
  cyan: 'hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-glow-cyan',
  pink: 'hover:border-neon-pink/60 hover:text-neon-pink hover:shadow-glow-pink',
  violet: 'hover:border-neon-violet/60 hover:text-neon-violet',
} as const

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <div className="rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur-sm md:p-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-violet">
          Let&apos;s Connect
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Find me around the web
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground text-pretty">
          Always up for a chat about tech, projects, or new ideas. Reach out on
          any of these.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {socials.map(({ label, handle, href, Icon, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 rounded-2xl border border-border bg-background/40 p-6 text-muted-foreground transition-all duration-300 hover:-translate-y-1 ${hover[accent]}`}
            >
              <Icon className="h-7 w-7" />
              <span className="font-display font-semibold text-foreground">
                {label}
              </span>
              <span className="font-mono text-xs">{handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-16 text-center font-mono text-xs text-muted-foreground">
        Designed &amp; built by Jashan
      </footer>
    </section>
  )
}
