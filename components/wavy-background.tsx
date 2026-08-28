export function WavyBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* deep glow blobs */}
      <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-neon-violet/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-neon-pink/15 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-neon-cyan/15 blur-[130px]" />

      {/* stacked animated waves at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[70vh] opacity-70">
        <WaveLayer
          color="var(--neon-cyan)"
          opacity={0.35}
          duration="18s"
          translateY="10%"
        />
        <WaveLayer
          color="var(--neon-violet)"
          opacity={0.3}
          duration="26s"
          translateY="22%"
        />
        <WaveLayer
          color="var(--neon-pink)"
          opacity={0.25}
          duration="34s"
          translateY="34%"
        />
      </div>

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}

function WaveLayer({
  color,
  opacity,
  duration,
  translateY,
}: {
  color: string
  opacity: number
  duration: string
  translateY: string
}) {
  return (
    <div
      className="absolute inset-x-0 bottom-0"
      style={{ transform: `translateY(${translateY})` }}
    >
      <div
        className="h-[40vh] w-[200%]"
        style={{
          animation: `wave-drift ${duration} linear infinite`,
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 C1680,80 1920,240 2160,160 C2400,80 2640,240 2880,160 L2880,320 L0,320 Z"
            fill={color}
            fillOpacity={opacity}
          />
        </svg>
      </div>
    </div>
  )
}
