import Image from "next/image";
import TrackLink from "../../components/TrackLink";
import { SITE, PRICING } from "../../lib/site";

export const metadata = {
  title: "Harga Sewa Lapangan Padel",
  description: "Harga sewa lapangan padel Onyx Padel per jam untuk weekday dan weekend. Booking online melalui Ayo dan Reclub.",
};

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

export default function Pricing() {
  return (
    <>
      <section className="section-top">
        <div className="tag"><b>3</b><span>Harga</span></div>
        <h1>Harga sewa<br />per jam</h1>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        {PRICING.map((g) => (
          <div className="price-group" key={g.title}>
            <h2>{g.title}</h2>
            <div className="rows">
              {g.rows.map(([time, price]) => (
                <div className="row" key={time}>
                  <span>{time}</span>
                  <strong>{rp(price)}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 40 }}>
          <TrackLink href={SITE.ayo} event="Schedule" className="btn btn-primary">
            <Image src="/images/ayo-logo.svg" alt="" width={24} height={13} style={{ height: "auto" }} />
            Booking di Ayo <span className="ico">↗</span>
          </TrackLink>
          <TrackLink href={SITE.reclub} event="Schedule" className="btn btn-outline">
            Booking di Reclub
          </TrackLink>
        </div>
      </section>
    </>
  );
}
