import Image from "next/image";
import TrackLink from "../components/TrackLink";
import { SITE, HIGHLIGHTS } from "../lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <Image
          src="/images/court-overview.jpg"
          alt="Padel court Onyx Padel di Karawaci"
          fill
          className="hero-bg"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="hero-inner">
          <div>
            <div className="hero-chips">
              <span className="chip">2 premium courts</span>
              <span className="chip">Sauna + cold plunge</span>
              <span className="chip">Karawaci, Tangerang</span>
            </div>
            <h1>Play private.<br />Recover better.</h1>
          </div>
          <div className="hero-right">
            <p className="hero-desc">
              Private padel venue eksklusif di Karawaci dengan 2 court premium, sauna, dan cold plunge — untuk pengalaman bermain yang lebih nyaman dan personal.
            </p>
            <div className="hero-actions">
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
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-left">
            <p className="about-label">Courts</p>
            <span className="badge-lime">2</span>
            <p className="about-label" style={{ marginTop: 4 }}>Premium courts</p>
          </div>
          <div className="about-right">
            <div className="tag">
              <b>1</b><span>Tentang Onyx Padel</span>
            </div>
            <p className="statement">
              Venue padel private di Karawaci — lebih intim, lebih nyaman, dan dilengkapi fasilitas recovery.
            </p>
            <div className="about-photos">
              <Image
                src="/images/lobby-sign.jpg"
                alt="Lobby Onyx Padel"
                width={600}
                height={800}
                className="about-photo-portrait"
              />
              <div>
                <Image
                  src="/images/lounge-seating.jpg"
                  alt="Area lounge Onyx Padel"
                  width={700}
                  height={525}
                  className="about-photo-landscape"
                />
                <p className="about-desc">Suasana venue yang lebih private — cocok untuk bermain bersama teman, komunitas, atau sesi latihan.</p>
                <TrackLink href="/about" event="LearnMore" className="btn btn-outline" style={{ marginTop: 16 }}>
                  Selengkapnya →
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services-section">
        <div className="tag">
          <b>2</b><span>Layanan</span>
        </div>
        <h2>Semua yang kamu butuhkan</h2>
        <div className="cards">
          <div className="card">
            <div className="card-ico">🎾</div>
            <h3>Sewa lapangan</h3>
            <p>2 court premium untuk pengalaman bermain padel terbaik, mulai Rp 150.000/jam.</p>
            <div className="card-photo">
              <Image src="/images/court-overview.jpg" alt="Padel court Onyx Padel" width={500} height={533} />
            </div>
          </div>
          <div className="card">
            <div className="card-ico">🌊</div>
            <h3>Sauna dan cold plunge</h3>
            <p>Fasilitas recovery untuk relaksasi dan pemulihan tubuh setelah bermain.</p>
            <div className="card-photo">
              <Image src="/images/changing-room.jpg" alt="Area sauna dan changing room" width={500} height={533} />
            </div>
          </div>
          <div className="card">
            <div className="card-ico">✦</div>
            <h3>Fasilitas lengkap</h3>
            <p>Hot shower, ruang ganti, tribun penonton, Wi-Fi, dan parkir mobil & motor.</p>
            <div className="card-photo">
              <Image src="/images/lounge-court-view.jpg" alt="Fasilitas lounge Onyx Padel" width={500} height={533} />
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Join ── */}
      <section className="join-section">
        <div className="tag">
          <b>3</b><span>Cara booking</span>
        </div>
        <h2>Mulai bermain dalam 4 langkah</h2>
        <div className="join-grid">
          <div className="steps">
            {[
              { n: "01", t: "Pilih jadwal dan cek harga", d: "Lihat slot tersedia dan harga per jam sesuai waktu bermain kamu di halaman Harga." },
              { n: "02", t: "Booking lewat Ayo atau Reclub", d: "Gunakan platform Ayo atau Reclub untuk memilih dan memesan jadwal dengan mudah." },
              { n: "03", t: "Bayar untuk mengamankan slot", d: "Pembayaran dilakukan sesuai ketentuan untuk mengonfirmasi booking kamu." },
              { n: "04", t: "Datang 10 menit lebih awal", d: "Gunakan sepatu olahraga yang sesuai dan nikmati pengalaman bermain di court premium kami." },
            ].map((s, i) => (
              <div key={s.n} className="step" aria-expanded={i === 0 ? "true" : "false"} role="button" tabIndex={0}>
                <div className="step-header">
                  <small className="step-num">{s.n}</small>
                  <span className="step-title">{s.t}</span>
                </div>
                {i === 0 && <p className="step-desc">{s.d}</p>}
                {i === 0 && <div className="step-bar" />}
              </div>
            ))}
          </div>
          <Image
            src="/images/rackets-net.jpg"
            alt="Raket padel di net Onyx Padel"
            width={700}
            height={700}
            className="join-photo"
          />
        </div>
      </section>

      {/* ── Panel navy / CTA ── */}
      <section className="panel-section">
        <div className="panel">
          <div>
            <div className="tag tag-white">
              <b>4</b><span>Harga</span>
            </div>
            <h2>Weekday mulai<br />Rp 175.000/jam</h2>
            <p>Weekend flat Rp 150.000/jam. Book sekarang lewat Ayo atau Reclub.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <TrackLink href={SITE.ayo} event="Schedule" className="btn btn-primary">
                <Image src="/images/ayo-logo.svg" alt="" width={24} height={13} style={{ height: "auto" }} />
                Booking di Ayo <span className="ico">↗</span>
              </TrackLink>
              <TrackLink href={SITE.reclub} event="Schedule" className="btn btn-outline-white">
                Booking di Reclub
              </TrackLink>
            </div>
          </div>
          <Image
            src="/images/reception-lobby.jpg"
            alt="Resepsionis Onyx Padel"
            width={700}
            height={525}
            className="panel-photo"
          />
        </div>
      </section>
    </>
  );
}
