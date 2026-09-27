import Link from 'next/link';

// Company website URL (update here when custom domain is purchased)
const COMPANY_URL = 'https://sri-yuva-tech.web.app';

export default function PoweredByBadge() {
  return (
    <aside aria-label="Company branding" className="syt-badge-wrapper">
      <a
        href={COMPANY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="syt-badge"
        aria-label="Powered by Sri Yuva Tech (opens in a new tab)"
        title="Powered by Sri Yuva Tech"
      >
        <span className="syt-pill">Powered by</span>
        {/* <span className="syt-divider" aria-hidden="true" /> */}
        <span className="syt-brand">
          <span className="syt-navy">Sri&nbsp;</span>
          <span className="syt-gradient">Yuva</span>
          <span className="syt-navy">&nbsp;Tech</span>
        </span>
      </a>
    </aside>
  );
}

