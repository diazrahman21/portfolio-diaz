import { ExternalLink } from 'lucide-react'
import { Reveal } from '../../components/animations/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { certificates, type Certificate } from '../../data/content'

const rots = ['-rotate-[3deg]', 'rotate-[2deg]', '-rotate-[1deg]']

function CertificateCard({ certificate, i }: { certificate: Certificate; i: number }) {
  const image = certificate.image ? (
    <img
      src={certificate.image}
      alt={`${certificate.title} certificate`}
      loading="lazy"
      className="aspect-[4/3] w-full object-cover object-top"
    />
  ) : null

  return (
    <div
      className={`h-full rounded-xl border-[4px] border-double border-ink p-[22px] ${rots[i]}`}
      style={{ background: certificate.color }}
    >
      {image && (
        <div className="mb-4 overflow-hidden border-[2px] border-ink bg-paper">
          {certificate.link ? (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${certificate.title} certificate`}
              className="block"
            >
              {image}
            </a>
          ) : (
            image
          )}
        </div>
      )}

      <div className="font-hand text-[26px] font-bold leading-none">{certificate.issuer}</div>
      <div className="mt-1.5 font-display text-[22px] font-extrabold leading-[1.15] tracking-[-0.015em]">
        {certificate.title}
      </div>

      {certificate.link && (
        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 font-display text-[15px] font-bold no-underline transition-opacity hover:opacity-60"
        >
          View certificate
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

export function Certificates() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-14 lg:py-28">
      <SectionHeading title="Certificates" color="#ffc93c" rotate={1} className="mb-11" />
      <div className="flex flex-wrap gap-7">
        {certificates.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.08}
            rotate={i === 1 ? 2 : i === 2 ? -1 : -3}
            className="min-w-0 flex-1 basis-[240px]"
          >
            <CertificateCard certificate={c} i={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
