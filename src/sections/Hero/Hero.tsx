import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Magnetic } from '../../components/ui/Magnetic'
import { profile } from '../../data/content'

const letters = [
  { char: 'D', bg: '#14213d', color: '#ffc93c', rotate: -4, y: 0, border: false },
  { char: 'i', bg: '#e8452c', color: '#14213d', rotate: 3, y: '0.06em', border: false },
  { char: 'a', bg: '#2d5be3', color: '#f7f5ee', rotate: -2, y: 0, border: false },
  { char: 'z', bg: '#f7f5ee', color: '#14213d', rotate: 5, y: '0.04em', border: true },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 40, rotate: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const floatY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="atas"
      className="relative flex flex-wrap items-center gap-10 px-4 pb-20 pt-6 sm:px-8 lg:gap-12 lg:px-14 lg:pb-24"
    >
      <motion.div
        className="relative min-w-0 flex-[1_1_520px]"
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show"
      >
        <motion.p
          variants={item}
          className="m-0 mb-1 ml-2 inline-block -rotate-[4deg] font-hand text-[40px] font-bold leading-none"
        >
          {profile.greeting}
        </motion.p>

        <h1
          aria-label="Diaz"
          className="m-0 flex flex-nowrap gap-[0.05em] font-display text-[clamp(5.5rem,16vw,15.5rem)] font-extrabold leading-none tracking-[-0.04em]"
        >
          {letters.map((l, i) => (
            <motion.span
              key={l.char}
              aria-hidden="true"
              variants={{
                hidden: { opacity: 0, y: 50, rotate: l.rotate * 2, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: l.rotate,
                  scale: 1,
                  transition: { duration: 0.7, ease, delay: 0.15 + i * 0.08 },
                },
              }}
              className={`inline-block px-[0.07em] ${l.border ? 'border-4 border-ink' : ''}`}
              style={{ background: l.bg, color: l.color, transform: `translateY(${l.y})` }}
            >
              {l.char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="m-0 mt-7 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.015em]"
        >
          {profile.name}
        </motion.p>

        <motion.p
          variants={item}
          className="m-0 mt-3.5 max-w-[34ch] text-[clamp(1.45rem,2.4vw,2rem)] font-medium leading-[1.25] [text-wrap:balance]"
        >
          {profile.headline}
        </motion.p>

        <motion.p variants={item} className="m-0 mt-4 max-w-[54ch] text-[1.05rem] [text-wrap:pretty]">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5">
          <Magnetic>
            <a
              href="#projects"
              onClick={go('#projects')}
              className="inline-flex min-h-[48px] items-center bg-ink px-[26px] py-[14px] font-display text-[17px] font-bold text-paper no-underline shadow-[5px_5px_0_#e8452c] transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-[48px] items-center border-[3px] border-ink bg-paper px-6 py-3 font-display text-[17px] font-bold text-ink no-underline shadow-[5px_5px_0_#14213d] transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-9 inline-block -rotate-[2deg] bg-note px-5 py-3.5 font-hand text-[30px] font-bold leading-[1.1] shadow-[3px_4px_0_rgba(20,33,61,0.25)]"
        >
          {profile.currentRole}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative h-[420px] min-w-0 flex-[1_1_340px] sm:h-[560px] lg:h-[640px] lg:max-w-[540px]"
        style={{ y: floatY }}
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
      >
        <div
          className="absolute left-0 top-[6%] h-[78%] w-[78%] -rotate-[6deg] bg-signal"
          style={{ clipPath: 'polygon(4% 0, 100% 3%, 96% 100%, 0 96%)' }}
        />
        <motion.div
          className="absolute left-[14%] top-[3%] h-[86%] w-[72%] rotate-[2.5deg]"
          style={{ filter: 'drop-shadow(8px 8px 0 #14213d)' }}
          initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1, ease, delay: 0.45 }}
        >
          <div
            className={`flex h-full w-full items-center justify-center text-center ${profile.profileImage ? '' : 'p-6'}`}
            style={{
              backgroundColor: '#b9bdb5',
              backgroundImage: profile.profileImage
                ? undefined
                : 'repeating-linear-gradient(45deg, rgba(20,33,61,0.12) 0 2px, transparent 2px 12px)',
              clipPath: 'polygon(8% 0, 92% 2%, 100% 18%, 97% 60%, 100% 100%, 0 100%, 3% 55%, 0 14%)',
            }}
          >
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            ) : (
              <span className="-rotate-[3deg] bg-paper px-3.5 py-1.5 font-hand text-[28px] font-bold leading-[1.1]">
                profile photo placeholder
              </span>
            )}
          </div>
        </motion.div>
        <div className="absolute left-[4%] top-0 h-[30px] w-[110px] -rotate-[28deg] bg-sun/80" aria-hidden="true" />
        <div className="absolute right-[8%] top-[4%] h-[30px] w-[100px] rotate-[24deg] bg-sky/60" aria-hidden="true" />
        <motion.div
          className="absolute -right-[2%] bottom-[4%] h-[140px] w-[140px] sm:h-[168px] sm:w-[168px]"
          initial={reduce ? false : { scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.7 }}
        >
          <svg role="img" aria-label="Open to work" viewBox="0 0 150 150" width="100%" height="100%">
            <polygon
              points="147,75 131,90 137.4,111 116,116 111,137.4 90,131 75,147 60,131 39,137.4 34,116 12.6,111 19,90 3,75 19,60 12.6,39 34,34 39,12.6 60,19 75,3 90,19 111,12.6 116,34 137.4,39 131,60"
              fill="#FFC93C"
              stroke="#14213D"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <text x="75" y="70" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="25" fill="#14213D">Open</text>
            <text x="75" y="96" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="25" fill="#14213D">to work</text>
          </svg>
        </motion.div>
        <svg aria-hidden="true" className="absolute -left-[4%] bottom-[6%] hidden sm:block" width="130" height="110" viewBox="0 0 130 110" fill="none" stroke="#14213D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12c30 4 60 20 70 52 4 12 4 22 0 30M80 94l-16-14M80 94l18-10" /></svg>
        <div className="absolute -left-[2%] bottom-0 hidden -rotate-[5deg] font-hand text-[30px] font-bold sm:block">that’s me!</div>
      </motion.div>
    </section>
  )
}
