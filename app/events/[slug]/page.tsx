import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, CheckCircle2 } from "lucide-react";

function CalendarIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 610.398 610.398" fill="#047857" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"/>
      <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"/>
      <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"/>
      <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"/>
      <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"/>
      <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"/>
      <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"/>
      <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"/>
      <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"/>
      <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"/>
      <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"/>
    </svg>
  );
}

function LocationIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="#047857" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
    </svg>
  );
}

function ClockIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function PriceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
}
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { events, getEventBySlug, getRelatedEvents } from "@/data/events";
import { EventDetailClient } from "./EventDetailClient";

/* ------------------------------------------------------------------ */
/*  Static params                                                       */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                            */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.title} | UPTIB Events`,
    description: event.excerpt,
  };
}

/* ------------------------------------------------------------------ */
/*  Section heading — inline pattern                                   */
/* ------------------------------------------------------------------ */
function InlineHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-base font-bold uppercase tracking-widest text-[#047857] mb-2">{label}</p>
      <div className="flex items-center gap-5 mb-0">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1F2E] shrink-0 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#1C1F2E]/25 min-w-0" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component (server)                                        */
/* ------------------------------------------------------------------ */
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const related = event.relatedSlugs ? getRelatedEvents(event.relatedSlugs) : [];

  const formattedDate = event.date;

  const categoryLabel =
    event.category === "London"
      ? "London Event"
      : event.category === "Pakistan"
      ? "Pakistan Event"
      : "UPTIB Event";

  return (
    <div>
      {/* ============================================================ */}
      {/*  EVENT HERO (client — has countdown timer)                   */}
      {/* ============================================================ */}
      <EventDetailClient
        title={event.title}
        dateISO={event.dateISO}
        category={categoryLabel}
        tag={event.tag}
        status={event.status}
      />

      {/* ============================================================ */}
      {/*  MAIN CONTENT                                                 */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* -------------------------------------------------------- */}
            {/*  LEFT — Social share sidebar                              */}
            {/* -------------------------------------------------------- */}
            <div className="lg:w-12 shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="flex lg:flex-col gap-3">
                  {[
                    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.ukpaktrade.org.uk/events/${event.slug}`)}` },
                    { label: "Twitter", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.ukpaktrade.org.uk/events/${event.slug}`)}&text=${encodeURIComponent(event.title)}` },
                    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.ukpaktrade.org.uk/events/${event.slug}`)}` },
                    { label: "Email", href: `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(`Check out this event: https://www.ukpaktrade.org.uk/events/${event.slug}`)}` },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.label !== "Email" ? "_blank" : undefined}
                      rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={`Share on ${s.label}`}
                      className="w-9 h-9 border border-[#D8D5CF] flex items-center justify-center text-[#3D4152] hover:text-[#047857] hover:border-[#047857] transition-colors duration-200 text-base font-bold uppercase"
                    >
                      {s.label.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/*  RIGHT — Main editorial content                           */}
            {/* -------------------------------------------------------- */}
            <div className="flex-1 min-w-0">

              {/* Event Summary Card */}
              <AnimatedSection>
                <div className="bg-white border border-[#D8D5CF] p-6 sm:p-8 mb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <CalendarIcon size={26} />
                      <div>
                        <span className="text-base uppercase tracking-widest text-[#7A7E8F] font-bold block mb-1">Date</span>
                        <span className="text-[#1C1F2E] font-bold text-base leading-snug">{formattedDate}</span>
                      </div>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-4">
                        <ClockIcon size={26} />
                        <div>
                          <span className="text-base uppercase tracking-widest text-[#7A7E8F] font-bold block mb-1">Time</span>
                          <span className="text-[#1C1F2E] font-bold text-base leading-snug">{event.time}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <LocationIcon size={26} />
                      <div>
                        <span className="text-base uppercase tracking-widest text-[#7A7E8F] font-bold block mb-1">Location</span>
                        <span className="text-[#1C1F2E] font-bold text-base leading-snug">{event.location}</span>
                      </div>
                    </div>
                    {event.price && (
                      <div className="flex items-center gap-4">
                        <PriceIcon size={26} />
                        <div>
                          <span className="text-base uppercase tracking-widest text-[#7A7E8F] font-bold block mb-1">Price</span>
                          <span className="text-[#1C1F2E] font-bold text-base leading-snug">{event.price}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#D8D5CF]">
                    {event.officialLink ? (
                      <a
                        href={event.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#047857] text-white font-bold text-base uppercase tracking-wide hover:bg-[#a8172f] transition-colors duration-200"
                      >
                        Visit Official Site
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#047857] text-white font-bold text-base uppercase tracking-wide hover:bg-[#a8172f] transition-colors duration-200"
                      >
                        Register Interest
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Event Image */}
              <AnimatedSection className="mb-12">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#D8D5CF]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection className="mb-16">
                <InlineHeading label="Overview" title="About This Event" />
                <div className="space-y-4">
                  {event.body.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-[#3D4152]">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Agenda (optional) */}
              {event.agenda && event.agenda.length > 0 && (
                <AnimatedSection className="mb-16">
                  <InlineHeading label="Schedule" title="Event Agenda" />
                  <div className="bg-white border border-[#D8D5CF]">
                    {event.agenda.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 sm:gap-6 px-6 py-4 border-b border-[#D8D5CF] last:border-b-0 hover:bg-white transition-colors duration-200"
                      >
                        <div className="shrink-0 w-36 sm:w-44">
                          <span className="text-base font-semibold text-[#047857]">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-3 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span className="text-[#1C1F2E] font-medium text-base sm:text-base">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Speakers (optional) */}
              {event.speakers && event.speakers.length > 0 && (
                <AnimatedSection className="mb-16">
                  <InlineHeading label="Featured" title="Speakers" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {event.speakers.map((speaker) => (
                      <div key={speaker.name} className="text-center group">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 overflow-hidden bg-[#D8D5CF]">
                          {speaker.image ? (
                            <Image
                              src={speaker.image}
                              alt={speaker.name}
                              fill
                              className="object-cover"
                              sizes="112px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#D8D5CF]">
                              <Users className="w-8 h-8 text-[#7A7E8F]" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-heading font-semibold text-base text-[#1C1F2E] mb-1 group-hover:text-[#047857] transition-colors duration-200">
                          {speaker.name}
                        </h4>
                        <p className="text-base leading-snug text-[#3D4152]">{speaker.title}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* CTA */}
              <AnimatedSection className="mb-16">
                <div className="bg-[#1C1F2E] p-8 sm:p-12">
                  <Users className="w-8 h-8 text-[#10B981] mb-5" />
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                    Interested in Attending?
                  </h3>
                  <div className="h-px bg-white/20 mb-5" />
                  <p className="text-base text-white/70 mb-8 leading-relaxed">
                    Visit the official event page for registration details, agenda updates, and delegate information.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {event.officialLink ? (
                      <a
                        href={event.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#047857] text-white font-bold text-base uppercase tracking-wide hover:bg-[#a8172f] transition-colors duration-200"
                      >
                        Visit Official Site
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#047857] text-white font-bold text-base uppercase tracking-wide hover:bg-[#a8172f] transition-colors duration-200"
                      >
                        Register Interest
                      </Link>
                    )}
                    <Button href="/events" variant="glass" size="lg">
                      View All Events
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Events */}
              {related.length > 0 && (
                <AnimatedSection>
                  <InlineHeading label="See also" title="Related Events" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/events/${rel.slug}`} className="group block">
                        <div className="bg-white border border-[#D8D5CF] overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative aspect-video bg-[#D8D5CF]">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, 300px"
                            />
                            <div className="absolute top-3 left-3 px-2 py-1 bg-[#047857] text-white text-base font-bold uppercase tracking-wider">
                              {rel.tag}
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-base text-[#047857] font-semibold mb-1">{rel.date}</p>
                            <h4 className="font-heading font-semibold text-base text-[#1C1F2E] group-hover:text-[#047857] transition-colors duration-200 line-clamp-2">
                              {rel.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
