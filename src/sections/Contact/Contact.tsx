import { ArrowUp } from 'lucide-react'
import { Reveal } from '../../components/animations/Reveal'
import { Magnetic } from '../../components/ui/Magnetic'
import { profile } from '../../data/content'

export function Contact() {
  const toTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <section
      id="contact"
      className="relative mt-8 bg-ink px-4 pb-12 pt-28 text-paper sm:px-8 lg:px-14"
      style={{ clipPath: 'polygon(0 3%, 6% 0, 13% 3%, 21% 0, 29% 3%, 37% 0, 45% 3%, 53% 0, 61% 3%, 69% 0, 77% 3%, 85% 0, 93% 3%, 100% 1%, 100% 100%, 0 100%)' }}
    >
      <Reveal>
        <p className="mb-3 inline-block -rotate-[3deg] font-hand text-[40px] font-bold leading-none text-pink">
          got a role or an idea?
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="m-0 max-w-[12ch] font-display text-[clamp(3.2rem,10vw,9.5rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-sun [text-wrap:balance]">
          Let’s build something reliable.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-7 max-w-[52ch] text-[21px] [text-wrap:pretty]">
          I’m open to full-stack and backend developer roles. Send me a message and I’ll get back to you.
        </p>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-[18px]">
        <Magnetic>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block min-h-[48px] -rotate-[2deg] bg-sun px-[26px] py-[14px] font-display text-[17px] font-bold text-ink no-underline shadow-[5px_5px_0_#e8452c] [overflow-wrap:anywhere]"
          >
            {profile.email}
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-block min-h-[48px] rotate-[1.5deg] bg-powder px-[26px] py-[14px] font-display text-[17px] font-bold text-ink no-underline shadow-[5px_5px_0_#e8452c]"
          >
            {profile.linkedinLabel}
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href={profile.phoneHref}
            className="inline-block min-h-[48px] -rotate-[1deg] bg-paper px-[26px] py-[14px] font-display text-[17px] font-bold text-ink no-underline shadow-[5px_5px_0_#e8452c]"
          >
            {profile.phone}
          </a>
        </Magnetic>
      </div>
      <footer className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-paper/20 pt-8">
        <div>
          <p className="m-0 font-display text-base font-bold text-paper">{profile.name}</p>
          <p className="m-0 mt-1 font-display text-[15px] font-medium text-[#c9cdd6]">
            {profile.location} © 2026 {profile.name}.
          </p>
          <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-display text-sm text-[#c9cdd6]">
            <a href="#about" className="hover:text-sun">About</a>
            <a href="#projects" className="hover:text-sun">Projects</a>
            <a href="#experience" className="hover:text-sun">Experience</a>
            <a href="#education" className="hover:text-sun">Education</a>
          </nav>
        </div>
        <Magnetic>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-2 border-2 border-paper/40 px-4 py-2 font-display text-sm font-bold text-paper transition-colors hover:border-sun hover:text-sun"
            aria-label="Back to top"
          >
            <ArrowUp size={16} /> Back to top
          </button>
        </Magnetic>
      </footer>
    </section>
  )
}
