"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV } from "../lib/site";
import TrackLink from "./TrackLink";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link href="/" className="logo" onClick={() => setOpen(false)}>Onyx Padel</Link>
      <nav className={`nav${open ? " open" : ""}`}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <TrackLink href={SITE.ayo} event="Schedule" className="header-icon-link" aria-label="Booking Ayo">
          <Image src="/images/ayo-logo.svg" alt="Ayo" width={32} height={17} style={{ height: "auto", display: "block" }} />
        </TrackLink>
        <TrackLink href={SITE.wa} event="Contact" className="header-icon-link" aria-label="Chat WhatsApp">
          <Image src="/images/whatsapp-logo.svg" alt="WhatsApp" width={22} height={22} style={{ display: "block" }} />
        </TrackLink>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
