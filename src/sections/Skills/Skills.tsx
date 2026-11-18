import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { skillGroups, softSkills } from '../../data/content'

export function Skills() {
  return (
    <section id="skills" className="px-4 pb-10 pt-16 sm:px-8 lg:px-14">
      <SectionHeading title="Skills & Toolbox" color="#9ec1ff" rotate={1} className="mb-11" />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="min-w-0">
          <Reveal>
            <h3 className="m-0 mb-5 inline-block -rotate-[2deg] font-hand text-[44px] font-bold leading-none">my toolbox</h3>
          </Reveal>
          <div className="flex flex-col gap-5">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 0.06}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
                  <span className="w-[150px] shrink-0 font-display text-lg font-extrabold">{g.title}</span>
                  {g.items.map((item, i) => (
                    <span
                      key={item}
                      className="rounded-full border-[2.5px] border-ink px-3.5 py-1 font-display text-base font-semibold"
                      style={{ background: g.color, transform: `rotate(${((i % 5) - 2) * 1.2}deg)` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <span className="mb-3 block font-display text-lg font-extrabold">Professional soft skills</span>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((s, i) => (
                  <span
                    key={s}
                    className="rounded-full border-[2.5px] border-ink bg-paper px-3.5 py-1 font-display text-[15px] font-semibold"
                    style={{ transform: `rotate(${((i % 4) - 1.5) * 1.1}deg)` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="min-w-0 lg:sticky lg:top-28">
          {/** Vue custom element (registered in src/vue/registerToolboxExplorer.ts) */}
          {(() => {
            const Tag = 'toolbox-explorer' as any
            return <Tag />
          })()}
        </Reveal>
      </div>
    </section>
  )
}
