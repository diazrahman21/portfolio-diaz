import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { experience } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

const rots = ['-rotate-[0.6deg]', 'rotate-[0.7deg]', '-rotate-[0.5deg]', 'rotate-[0.5deg]', '-rotate-[0.7deg]']

export function Experience() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      if (lineRef.current && wrapRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.6,
            },
          },
        )
      }
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="px-4 pb-10 pt-24 sm:px-8 lg:px-14 lg:pt-28">
      <SectionHeading title="Work experience" color="#ffb3c7" rotate={1.5} className="mb-12" />
      <div ref={wrapRef} className="relative mx-auto max-w-[1040px]">
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-[18px] top-4 hidden w-[6px] origin-top bg-ink/15 md:block"
        />
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute bottom-4 left-[18px] top-4 hidden w-[6px] origin-top bg-signal md:block"
          style={{ transform: 'scaleY(0)' }}
        />
        <div className="flex flex-col gap-7 md:pl-12">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.period} delay={i * 0.05} className={rots[i]}>
              <article className="flex flex-wrap border-[3px] border-ink bg-paper shadow-[8px_8px_0_#14213d]">
                <div
                  className="box-border flex-[0_0_100%] border-b-[3px] border-dashed border-ink p-5 font-display text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] sm:flex-[0_0_190px] sm:border-b-0 sm:border-r-[3px]"
                  style={{ background: item.color }}
                >
                  {item.period.split(/(?=20\d{2})/).map((part, idx) => (
                    <span key={idx} className="block">
                      {part.trim()}
                    </span>
                  ))}
                </div>
                <div className="min-w-0 flex-[1_1_320px] px-6 pb-6 pt-5">
                  <h3 className="m-0 font-display text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em]">
                    {item.role}
                  </h3>
                  <p className="m-0 mt-0.5 mb-2.5 font-display text-base font-semibold">{item.company}</p>
                  <ul className="m-0 max-w-[66ch] list-disc space-y-1 pl-[22px]">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
