import { SITE, NAV } from "../lib/site";

export default function sitemap() {
  return ["/", ...NAV.map((n) => n.href)].map((p) => ({ url: SITE.url + p, lastModified: new Date() }));
}
