const milestones = [
  {
    year: 'Class 10',
    title: 'Where it all began',
    description:
      'Built my foundations and discovered a love for problem solving. Board exams taught me discipline, consistency, and how to turn a big syllabus into small daily wins.',
    accent: 'cyan',
  },
  {
    year: 'JEE Prep',
    title: 'The grind years',
    description:
      'Dove deep into physics, chemistry, and math. Long hours, endless problem sets, and the occasional breakdown — but every mock test made me sharper and more resilient.',
    accent: 'violet',
  },
  {
    year: '+1 & +2',
    title: 'Balancing act',
    description:
      'Juggled school, competitive prep, and the first sparks of coding. Learned to manage pressure, prioritize ruthlessly, and stay curious beyond the textbook.',
    accent: 'pink',
  },
  {
    year: 'College — 1st Year',
    title: 'New beginnings',
    description:
      'Started college with fresh energy — met brilliant people, joined communities, and began turning ideas into real projects. This is where building became my thing.',
    accent: 'cyan',
  },
] as const

const accentMap = {
  cyan: 'text-neon-cyan border-neon-cyan/50 shadow-glow-cyan',
  violet: 'text-neon-violet border-neon-violet/50',
  pink: 'text-neon-pink border-neon-pink/50 shadow-glow-pink',
} as const

const dotMap = {
  cyan: 'bg-neon-cyan',
  violet: 'bg-neon-violet',
  pink: 'bg-neon-pink',
} as const

export function JourneySection() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-pink">
          The Timeline
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          My Journey
        </h2>
      </div>

      <ol className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-pink md:left-1/2" />

        {milestones.map((m, i) => (
          <li
            key={m.year}
            className={`relative mb-12 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${
              i % 2 === 0 ? '' : 'md:[direction:rtl]'
            }`}
          >
            {/* dot */}
            <span
              className={`absolute left-0 top-2 h-4 w-4 rounded-full ${dotMap[m.accent]} ring-4 ring-background md:left-1/2 md:-translate-x-1/2`}
            />

            <div
              className={`pl-10 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:[direction:ltr]'
              }`}
            >
              <div
                className={`rounded-2xl border bg-card/60 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 ${accentMap[m.accent]}`}
              >
                <span className="font-mono text-sm font-semibold">
                  {m.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-card-foreground">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground [direction:ltr]">
                  {m.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
