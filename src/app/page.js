import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FEATURED_SERVICES = [
  {
    title: 'Mountain Dwellers (Palliars)',
    image: 'palliars.jpg',
    quote: 'Healthcare, education, and clean water for isolated Palliar mountain tribes.',
  },
  {
    title: 'Bamboo Dancers',
    image: 'bamboo-dancers.jpg',
    quote: 'Preserving a living art form while opening doors to income and dignity.',
  },
  {
    title: 'Basket Makers',
    image: 'basket-makers.jpg',
    quote: 'Connecting traditional weavers to fair markets and cooperatives.',
  },
  {
    title: 'Hill Tribes (Lambadis)',
    image: 'lambadis.jpg',
    quote: 'Preserving heritage while improving everyday living standards.',
  },
  {
    title: 'Rope Performers',
    image: 'rope-performers.jpg',
    quote: 'Safety, schooling, and recognition for a skill few others see.',
  },
  {
    title: 'Street Actors',
    image: 'street-actors.jpg',
    quote: 'Arts education and livelihood training for street performers.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            {/* <span className="hero-eyebrow">Mission Word Movement Ministries India and Beyond</span> */}
            <span className="hero-eyebrow" style={{ marginTop: '0.5rem', opacity: 0.9 }}>Registered public trust · Since 2016</span>
            <h1>Preaching the word, Reaching the world</h1>
            <p className="lede">
              Mission Word Movement Trust stands with
              tribal and nomadic communities across Tamil Nadu — mountain
              dwellers, rope performers, basket weavers, street artists and
              more — through education, healthcare, and a path to honest,
              dignified work.
            </p>
            <div className="hero-ctas">
              <Link href="/donate" className="btn-fill">
                Donate now
              </Link>
              <Link href="/services" className="btn-outline">
                See who we serve
              </Link>
            </div>
            <p className="hero-credibility">
              Reg. No. 91/BK4/2016
              <span className="dot"></span>
              TN Societies Act 27 of 1975
              <span className="dot"></span>
              12A approved
            </p>
          </div>

          <div className="hero-art">
            <div className="photo-a">
              <img src="/services/palliars.jpg" alt="Palliar mountain community MWM Trust works with" />
            </div>
            <div className="photo-b">
              <img src="/services/basket-makers.jpg" alt="A basket maker MWM Trust supports" />
            </div>
            <div className="hero-stat-card">
              <div className="num">20+</div>
              <div className="label">communities we walk with</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-strip">
        <div className="stats-grid">
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">communities we walk with</div>
          </div>
          <div>
            <div className="stat-num">10</div>
            <div className="stat-label">years of grassroots work</div>
          </div>
          <div>
            <div className="stat-num">2016</div>
            <div className="stat-label">trust founded &amp; registered</div>
          </div>
          <div>
            <div className="stat-num">12A</div>
            <div className="stat-label">tax-exemption approved</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES HIGHLIGHT ================= */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <span className="hero-eyebrow">What we do</span>
            <h2>Communities we walk with</h2>
            <p>
              Our work reaches twenty distinct communities across Tamil
              Nadu — traditional performers, artisans, and tribal groups
              whose livelihoods rarely get noticed. Each program blends
              direct aid with dignity: schooling for children, healthcare
              access, and a route to sustainable income.
            </p>
          </div>

          <div className="services-grid">
            {FEATURED_SERVICES.map((service) => (
              <Link
                href="/services"
                key={service.title}
                className="service-tile"
              >
                <img src={`/services/${service.image}`} alt={service.title} />
                <div className="tile-shade"></div>
                <div className="tile-text">
                  <h3>{service.title}</h3>
                  <p>{service.quote}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="services-cta">
            <Link href="/services" className="section-link">
              View all 20 communities we serve <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DONATION HIGHLIGHT ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="give-section">
          <div className="give-inner">
            <div className="give-copy">
              <span className="hero-eyebrow">Support our work</span>
              <h2>Your gift becomes someone&apos;s next chapter</h2>
              <p>
                MWM Trust runs entirely on the generosity of people like
                you. Every donation goes directly into the field — into a
                child&apos;s school fees, a hostel meal, a health camp, or
                the tools that let someone earn an honest living.
              </p>
              <div className="hero-ctas">
                <Link href="/donate" className="btn-fill">
                  Donate now
                </Link>
                <Link href="/about" className="btn-outline-light">
                  Read our story
                </Link>
              </div>
              <div className="give-badges">
                <span className="give-badge">12A approved</span>
                <span className="give-badge">Est. 2016</span>
                <span className="give-badge">Reg. No. 91/BK4/2016</span>
              </div>
            </div>

            <div className="give-list">
              <div className="give-item">
                <span className="give-icon"><i className="bi bi-mortarboard"></i></span>
                <div>
                  <h4>Education &amp; shelter</h4>
                  <p>Hostel facilities and schooling for tribal and nomadic children who would otherwise have neither.</p>
                </div>
              </div>
              <div className="give-item">
                <span className="give-icon"><i className="bi bi-heart-pulse"></i></span>
                <div>
                  <h4>Healthcare &amp; nutrition</h4>
                  <p>Free medical camps, check-ups, and medicine for communities with little access to care.</p>
                </div>
              </div>
              <div className="give-item">
                <span className="give-icon"><i className="bi bi-hammer"></i></span>
                <div>
                  <h4>Skill &amp; livelihood</h4>
                  <p>Vocational training and market access so traditional artisans and performers can earn with dignity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SNIPPET ================= */}
      <section className="section">
        <div className="section-inner about-snippet">
          <div className="quote-block">
            <blockquote>
              &ldquo;Expect great things from God and attempt great things for God.&rdquo;
            </blockquote>
            <footer>— Motto, Mission Word Movement Ministries India and Beyond</footer>
          </div>
          <div className="about-copy">
            <h2>Every child is born good</h2>
            <p>
              We connect with tribal and nomadic children, offering
              education and hostel facilities — because every child is
              born good, and it is the environment around them that
              shapes who they become. For close to a decade we&apos;ve
              worked to transform lives with light, care, and purpose.
            </p>
            <Link href="/about" className="section-link">
              Read our full story <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">
        <h2>However you can help, it moves someone forward</h2>
        <p>
          A donation, a shared post, a prayer — every bit of support
          helps us reach one more family, one more child, one more
          overlooked community.
        </p>
        <div className="final-cta-actions">
          <Link href="/donate" className="btn-fill">
            Donate now
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
