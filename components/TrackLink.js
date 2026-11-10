"use client";

// Link biasa + kirim event Meta Pixel saat diklik (mis. "Contact", "Schedule").
export default function TrackLink({ event, href, children, ...rest }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={() => window.fbq?.("track", event)}
      {...rest}
    >
      {children}
    </a>
  );
}
