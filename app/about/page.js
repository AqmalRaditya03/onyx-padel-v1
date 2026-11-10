import Image from "next/image";
import TrackLink from "../../components/TrackLink";
import { SITE, ABOUT, HIGHLIGHTS } from "../../lib/site";

export const metadata = {
  title: "Tentang",
  description: "Onyx Padel, private padel venue dengan 2 court premium, sauna, dan cold plunge di Karawaci, Kelapa Dua, Tangerang.",
};

export default function About() {
  return (
    <>
      <section className="section-top">
        <div className="tag"><b>1</b><span>Tentang Onyx Padel</span></div>
        <h1>Venue padel private<br />di Karawaci</h1>
      </section>

      <section className="about-section" style={{ paddingTop: 0 }}>
        <div className="about-grid">
          <div className="about-left">
            <p className="about-label">Courts</p>
            <span className="badge-lime">2</span>
            <p className="about-label" style={{ marginTop: 4 }}>Premium courts</p>
          </div>
          <div className="about-right">
            <p className="statement">{ABOUT[0]}</p>
            <div className="about-photos">
              <Image
                src="/images/lobby-sign.jpg"
                alt="Lobby Onyx Padel dengan sign dinding berlampu"
                width={600}
                height={800}
                className="about-photo-portrait"
              />
              <div>
                <Image
                  src="/images/court-overview.jpg"
                  alt="Dua padel court Onyx Padel dilihat dari luar kaca"
                  width={700}
                  height={525}
                  className="about-photo-landscape"
                />
                <p className="about-desc">{ABOUT[1]}</p>
                <p className="about-desc" style={{ marginTop: 8 }}>{ABOUT[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="tag"><b>✦</b><span>Keunggulan</span></div>
        <h2 style={{ marginBottom: 0 }}>Kenapa Onyx</h2>
        <ul className="highlights">
          {HIGHLIGHTS.map((h) => (
            <li key={h.t}><h3>{h.t}</h3><p>{h.d}</p></li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="panel-section">
        <div className="panel">
          <div>
            <h2>Siap bermain?</h2>
            <p>Book slot sekarang lewat Ayo atau Reclub. Datang 10 menit lebih awal dan nikmati court premium kami.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <TrackLink href={SITE.ayo} event="Schedule" className="btn btn-primary">
                <Image src="/images/ayo-logo.svg" alt="" width={24} height={13} style={{ height: "auto" }} />
                Booking lapangan <span className="ico">↗</span>
              </TrackLink>
              <TrackLink href={SITE.wa} event="Contact" className="btn btn-outline-white">
                <Image src="/images/whatsapp-logo.svg" alt="" width={16} height={16} />
                Chat WhatsApp
              </TrackLink>
            </div>
          </div>
          <Image src="/images/lounge-seating.jpg" alt="Lounge Onyx Padel" width={700} height={525} className="panel-photo" />
        </div>
      </section>
    </>
  );
}
