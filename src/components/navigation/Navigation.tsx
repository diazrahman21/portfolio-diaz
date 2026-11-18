import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../../data/content'

const navColors = ['bg-sun', 'bg-powder', 'bg-pink', 'bg-mint', 'bg-ink text-paper']
const navRot = ['rotate-[2deg]', '-rotate-[2deg]', 'rotate-[1.5deg]', '-rotate-[1.5deg]', 'rotate-[1deg]']

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ground/85 backdrop-blur-md shadow-[0_2px_0_rgba(20,33,61,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-14">
        <a
          href="#atas"
          onClick={go('#atas')}
          className="inline-block -rotate-[3deg] bg-ink px-4 py-2 font-display text-xl font-extrabold tracking-[-0.02em] text-sun no-underline sm:text-2xl"
        >
          {profile.shortName}
        </a>
        <nav aria-label="Main" className="hidden flex-wrap items-center gap-3 md:flex">
          {navLinks.map((l, i) => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className={`inline-block px-[18px] py-[10px] font-display text-base font-bold no-underline shadow-[4px_4px_0_#14213d] transition-transform hover:-translate-y-0.5 ${navColors[i]} ${navRot[i]} ${
                  isActive ? 'ring-2 ring-ink ring-offset-2 ring-offset-ground' : ''
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center border-[3px] border-ink bg-paper p-2 shadow-[3px_3px_0_#14213d] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-ground/98 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={go(l.href)}
                  className={`inline-block w-fit px-5 py-3 font-display text-xl font-bold no-underline shadow-[4px_4px_0_#14213d] ${navColors[i]} ${navRot[i]}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
