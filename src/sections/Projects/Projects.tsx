import { motion } from 'framer-motion'
import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { projects } from '../../data/content'

const tones: Record<string, { screen: string; rot: string; y: string; accent: string; dark?: boolean }> = {
  powder: { screen: '#9ec1ff', rot: '-rotate-[2deg]', y: '', accent: '#ffc93c' },
  pink: { screen: '#ffb3c7', rot: 'rotate-[1.5deg]', y: 'lg:translate-y-7', accent: '#ffc93c' },
  sun: { screen: '#ffc93c', rot: '-rotate-[1deg]', y: '', accent: '#9ec1ff' },
  ink: { screen: '#14213d', rot: 'rotate-[2deg]', y: '', accent: '#ffb3c7', dark: true },
  mint: { screen: '#9ed8b5', rot: '-rotate-[1.5deg]', y: 'lg:translate-y-5', accent: '#ffc93c' },
}

export function Projects() {
  return (
    <section id="projects" className="px-4 pb-10 pt-24 sm:px-8 lg:px-14 lg:pt-28">
      <SectionHeading title="Selected projects" color="#14213d" textColor="#ffc93c" rotate={-1.5} className="mb-14" />
      <div className="flex flex-wrap items-start gap-x-9 gap-y-11">
        {projects.map((p, i) => {
          const t = tones[p.tone] || tones.powder
          const dark = t.dark
          return (
            <Reveal key={p.title} delay={i * 0.06} className={`min-w-0 flex-[1_1_340px] lg:max-w-[440px] ${t.y}`}>
              <motion.article
                className={`${t.rot}`}
                style={{ filter: 'drop-shadow(7px 7px 0 #14213d)' }}
                whileHover={{ y: -6, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              >
                <div
                  className={`p-4 pb-11 ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}
                  style={{ clipPath: i % 2 ? 'polygon(0 0, 100% 0, 100% 96%, 92% 99%, 84% 95%, 75% 98%, 66% 94%, 57% 99%, 48% 95%, 39% 98%, 30% 94%, 21% 99%, 12% 95%, 0 98%)' : 'polygon(0 0, 100% 0, 100% 95%, 94% 98%, 87% 94%, 80% 99%, 72% 95%, 64% 98%, 55% 94%, 46% 99%, 37% 95%, 28% 98%, 19% 94%, 10% 99%, 0 96%)' }}
                >
                  {dark ? (
                    <div className="mb-4 inline-block -rotate-[3deg] bg-signal px-3.5 py-0.5 font-hand text-[26px] font-bold leading-[1.1] text-ink">
                      work project
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-1.5 bg-ink px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                        <span className="h-2.5 w-2.5 rounded-full bg-sun" />
                        <span className="h-2.5 w-2.5 rounded-full bg-powder" />
                      </div>
                      <div
                        className="flex h-[170px] items-center justify-center overflow-hidden"
                        style={{
                          backgroundColor: t.screen,
                          backgroundImage: `repeating-linear-gradient(${i % 2 ? '-45deg' : '45deg'}, rgba(20,33,61,0.14) 0 2px, transparent 2px 12px)`,
                        }}
                      >
                        <motion.span
                          className={`${i % 2 ? 'rotate-[2deg]' : '-rotate-[2deg]'} bg-paper px-3 py-0.5 font-hand text-2xl font-bold`}
                          whileHover={{ scale: 1.04 }}
                        >
                          screenshot placeholder
                        </motion.span>
                      </div>
                    </>
                  )}
                  <h3 className={`m-0 mt-5 mb-2 font-display text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] ${dark ? 'text-sun' : ''}`}>
                    {p.title}
                  </h3>
                  <p className="m-0 mb-4 [text-wrap:pretty]">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 font-display text-[15px] font-semibold"
                        style={{ background: t.accent, color: '#14213d' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
