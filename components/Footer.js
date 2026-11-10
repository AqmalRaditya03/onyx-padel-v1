import Link from "next/link";
import Image from "next/image";
import { SITE, NAV } from "../lib/site";
import TrackLink from "./TrackLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-logo">Onyx Padel</p>
        <p className="footer-addr">{SITE.address}</p>
      </div>
      <div className="footer-links">
        {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        <TrackLink href={SITE.ayo} event="Schedule" className="footer-icon-link">
          <Image src="/images/ayo-logo.svg" alt="Ayo" width={22} height={12} style={{ height: "auto" }} /> Ayo
        </TrackLink>
        <TrackLink href={SITE.wa} event="Contact" className="footer-icon-link">
          <Image src="/images/whatsapp-logo.svg" alt="WhatsApp" width={16} height={16} /> WhatsApp
        </TrackLink>
      </div>
      <p className="footer-copy" style={{ gridColumn: "1 / -1" }}>© {new Date().getFullYear()} Onyx Padel. Semua hak dilindungi.</p>
    </footer>
  );
}
