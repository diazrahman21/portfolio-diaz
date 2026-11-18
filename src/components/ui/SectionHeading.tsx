import { Reveal } from '../animations/Reveal'

type Props = {
  id?: string
  title: string
  color: string
  textColor?: string
  rotate?: number
  className?: string
}

export function SectionHeading({ title, color, textColor = '#14213d', rotate = -1.5, className = '' }: Props) {
  return (
    <Reveal rotate={rotate} className={className}>
      <h2
        className="inline-block font-display text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold leading-[1] tracking-[-0.035em] px-6 pt-1.5 pb-3 shadow-[6px_6px_0_#14213d]"
        style={{ background: color, color: textColor }}
      >
        {title}
      </h2>
    </Reveal>
  )
}
