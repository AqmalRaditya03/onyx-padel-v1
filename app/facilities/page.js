import Image from "next/image";
import TrackLink from "../../components/TrackLink";
import { SITE, FACILITIES } from "../../lib/site";

export const metadata = {
  title: "Fasilitas",
  description: "Fasilitas Onyx Padel: sauna, cold plunge, hot shower, ruang ganti, tribun penonton, Wi-Fi, parkir mobil dan motor.",
};

const GALLERY = [
  { src: "/images/court-overview.jpg",      alt: "Padel court dilihat dari luar kaca" },
  { src: "/images/court-tribun-view.jpg",   alt: "Tribun dan area penonton" },
  { src: "/images/court-entry-corridor.jpg",alt: "Koridor masuk menuju court" },
  { src: "/images/lounge-court-view.jpg",   alt: "Area lounge menghadap court" },
  { src: "/images/lounge-seating.jpg",      alt: "Area duduk lounge" },
  { src: "/images/changing-room.jpg",       alt: "Ruang ganti dan kamar mandi" },
];

export default function Facilities() {
  return (
    <>
      <section className="section-top">
        <div className="tag"><b>2</b><span>Fasilitas</span></div>
        <h1>Semua yang kamu<br />butuhkan</h1>
      </section>

      {/* Facility tags */}
      <section className="section" style={{ paddingTop: 0 }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {FACILITIES.map((f) => (
            <li key={f}>
              <span style={{
                display: "inline-block", padding: "6px 14px",
                border: "1px solid var(--line)", borderRadius: "var(--r-pill)",
                fontSize: "0.875rem", color: "var(--grey-text)"
              }}>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section className="services-section">
        <div className="tag"><b>✦</b><span>Galeri</span></div>
        <h2>Lihat sendiri</h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12, marginTop: 32
        }}>
          {GALLERY.map((img) => (
            <div key={img.src} style={{ borderRadius: "var(--r-photo)", overflow: "hidden", aspectRatio: "4/3" }}>
              <Image
                src={img.src} alt={img.alt}
                width={800} height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="panel-section">
        <div className="panel">
          <div>
            <h2>Rasakan sendiri<br />pengalamannya</h2>
            <p>Book slot sekarang dan nikmati venue padel private terbaik di Karawaci.</p>
            <TrackLink href={SITE.ayo} event="Schedule" className="btn btn-primary">
              <Image src="/images/ayo-logo.svg" alt="" width={24} height={13} style={{ height: "auto" }} />
              Booking lapangan <span className="ico">↗</span>
            </TrackLink>
          </div>
          <Image src="/images/rackets-net.jpg" alt="Raket padel di net" width={700} height={525} className="panel-photo" />
        </div>
      </section>
    </>
  );
}
