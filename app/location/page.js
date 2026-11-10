import Image from "next/image";
import TrackLink from "../../components/TrackLink";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Lokasi",
  description: "Onyx Padel di Jl. Rorojonggrang No.1, Bencongan Indah, Kelapa Dua, Kabupaten Tangerang (Karawaci). Peta dan kontak WhatsApp.",
};

export default function Location() {
  return (
    <>
      <section className="section-top">
        <div className="tag"><b>✦</b><span>Lokasi</span></div>
        <h1>Temukan kami<br />di Karawaci</h1>
        <p style={{ marginTop: 16, fontSize: "0.9375rem", color: "var(--grey-text)", maxWidth: "52ch", lineHeight: 1.7 }}>
          {SITE.address}
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
          <TrackLink href={SITE.maps} event="FindLocation" className="btn btn-primary">
            Buka Google Maps <span className="ico">↗</span>
          </TrackLink>
          <TrackLink href={SITE.wa} event="Contact" className="btn btn-outline">
            <Image src="/images/whatsapp-logo.svg" alt="WhatsApp" width={18} height={18} />
            {SITE.phoneDisplay}
          </TrackLink>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="map-wrap">
          <iframe
            title="Peta Onyx Padel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3568582916832!2d106.60075309999999!3d-6.216581799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff0015224af5%3A0x458b9221ce54192d!2sOnyx%20Padel!5e0!3m2!1sid!2sid!4v1794304220243!5m2!1sid!2sid"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}
