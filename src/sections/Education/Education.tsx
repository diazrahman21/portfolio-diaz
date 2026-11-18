import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { education } from '../../data/content'

const cardRots = ['rotate-[1.5deg]', '-rotate-[1deg]', 'rotate-[1deg]']

export function Education() {
  return (
    <section id="education" className="px-4 pb-10 pt-24 sm:px-8 lg:px-14 lg:pt-28">
      <SectionHeading title="Education & Leadership" color="#9ed8b5" rotate={-1.5} className="mb-12" />
      <div className="flex flex-wrap items-stretch gap-8">
        <Reveal rotate={-1} className="relative min-w-0 flex-[2_1_460px]">
          <div
            className="h-full bg-kraft px-8 pb-13 pt-9 sm:px-[34px] sm:pb-[52px] sm:pt-9"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 94% 98%, 87% 94%, 80% 99%, 72% 95%, 63% 98%, 54% 94%, 45% 99%, 36% 95%, 27% 98%, 18% 94%, 9% 99%, 0 96%)', filter: 'drop-shadow(6px 6px 0 #14213d)' }}
          >
            <p className="m-0 font-display text-base font-semibold">{education.period}</p>
            <h3 className="m-0 mt-1 font-display text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              {education.degree}
            </h3>
            <p className="m-0 mb-4 font-display text-base font-semibold">
              {education.school}. {education.gpa}
            </p>
            <ul className="m-0 max-w-[60ch] list-disc space-y-1 pl-[22px]">
              {education.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="absolute -top-3.5 right-12 h-7 w-24 rotate-[5deg] bg-sky/55" aria-hidden="true" />
        </Reveal>
        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-7">
          {education.leadership.map((l, i) => (
            <Reveal key={l.role} delay={i * 0.08} rotate={i === 0 ? 1.5 : i === 1 ? -1 : 1}>
              <div className={`border-[3px] border-ink bg-paper p-[22px] px-6 shadow-[6px_6px_0_#14213d] ${cardRots[i]}`}>
                <p className="m-0 font-display text-base font-semibold">{l.period}</p>
                <h3 className="m-0 mt-0.5 font-display text-[22px] font-extrabold leading-[1.15] tracking-[-0.015em]">
                  {l.role}
                </h3>
                <p className="m-0 mb-2 font-display text-base font-semibold">{l.org}</p>
                <p className="m-0 text-[18px] leading-[1.5] [text-wrap:pretty]">{l.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
