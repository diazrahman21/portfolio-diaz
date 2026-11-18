import { Reveal } from '../../components/animations/Reveal'
import { Counter } from '../../components/ui/Counter'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { about } from '../../data/content'

const statStyles = [
  { bg: 'bg-sun', rot: 'rotate-[1.5deg]' },
  { bg: 'bg-pink', rot: '-rotate-[2deg]' },
  { bg: 'bg-powder', rot: '-rotate-[1deg]' },
  { bg: 'bg-paper', rot: 'rotate-[2deg]' },
]

export function About() {
  return (
    <section id="about" className="px-4 pb-10 pt-24 sm:px-8 lg:px-14 lg:pt-28">
      <SectionHeading title="About me" color="#ffc93c" rotate={-1.5} className="mb-11" />
      <div className="flex flex-wrap items-stretch gap-7">
        <Reveal rotate={-1} className="relative min-w-0 flex-[2_1_420px]" >
          <div
            className="h-full bg-kraft px-9 pb-14 pt-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 98%, 90% 94%, 84% 99%, 78% 95%, 71% 98%, 64% 94%, 57% 99%, 50% 95%, 43% 98%, 36% 94%, 29% 99%, 22% 95%, 15% 98%, 8% 94%, 0 97%)', filter: 'drop-shadow(6px 6px 0 #14213d)' }}
          >
            <h3 className="m-0 mb-4 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              {about.heading}
            </h3>
            {about.paragraphs.map((p) => (
              <p key={p} className="m-0 mb-4 max-w-[60ch] [text-wrap:pretty] last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="absolute -top-3.5 left-10 h-7 w-24 -rotate-[6deg] bg-pink/80" aria-hidden="true" />
        </Reveal>
        <div className="flex min-w-0 flex-[3_1_480px] flex-wrap gap-6">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} rotate={i % 2 ? -2 : 1.5} className="min-w-0 flex-1 basis-[200px]">
              <div className={`h-full border-[3px] border-ink p-[22px] shadow-[6px_6px_0_#14213d] transition-transform hover:-translate-y-1 ${statStyles[i].bg} ${statStyles[i].rot}`}>
                <div className="font-display text-[64px] font-extrabold leading-none tracking-[-0.04em] [font-variant-numeric:lining-nums_tabular-nums]">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-1.5 font-display text-base font-semibold leading-[1.3]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
