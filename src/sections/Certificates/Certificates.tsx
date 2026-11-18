import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { certificates } from '../../data/content'

const rots = ['-rotate-[3deg]', 'rotate-[2deg]', '-rotate-[1deg]']

export function Certificates() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-14 lg:py-28">
      <SectionHeading title="Certificates" color="#ffc93c" rotate={1} className="mb-11" />
      <div className="flex flex-wrap gap-7">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} rotate={i === 1 ? 2 : i === 2 ? -1 : -3} className="min-w-0 flex-1 basis-[240px]">
            <div
              className={`h-full rounded-xl border-[4px] border-double border-ink p-[22px] ${rots[i]}`}
              style={{ background: c.color }}
            >
              <div className="font-hand text-[26px] font-bold leading-none">{c.issuer}</div>
              <div className="mt-1.5 font-display text-[22px] font-extrabold leading-[1.15] tracking-[-0.015em]">
                {c.title}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
