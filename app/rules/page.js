import { RULES } from "../../lib/site";

export const metadata = {
  title: "Aturan Venue dan Kebijakan Booking",
  description: "Aturan venue, aturan sauna dan cold plunge, serta kebijakan booking, reschedule, dan refund Onyx Padel.",
};

export default function Rules() {
  return (
    <>
      <section className="section-top">
        <div className="tag"><b>✦</b><span>Aturan & Kebijakan</span></div>
        <h1>Aturan dan<br />kebijakan venue</h1>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        {RULES.map((r) => (
          <div className="rules-block" key={r.title}>
            <h2>{r.title}</h2>
            <ol>{r.items.map((i) => <li key={i}>{i}</li>)}</ol>
          </div>
        ))}
      </section>
    </>
  );
}
