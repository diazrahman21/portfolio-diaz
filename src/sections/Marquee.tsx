import { marqueeItems } from '../data/content'

export function Marquee() {
  const text = marqueeItems.join(' ★ ') + ' ★ '
  return (
    <div className="marquee relative -mx-2 my-4 overflow-hidden bg-ink py-3 text-sun sm:-mx-6" style={{ transform: 'rotate(-1.5deg)' }} aria-hidden="true">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-[30px]">
        <span className="pr-4">{text.repeat(4)}</span>
        <span className="pr-4">{text.repeat(4)}</span>
      </div>
    </div>
  )
}
