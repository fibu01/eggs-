const instagramUrl = "https://www.instagram.com/eggsandja/";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement" aria-label="Launch announcement">
        <div className="ticker-track">
          <span>EGGS ARE COMING TO KINGSTON</span>
          <span aria-hidden="true">SUNNY SIDE UP • YARD STYLE</span>
          <span aria-hidden="true">FOLLOW @EGGSANDJA</span>
          <span aria-hidden="true">EGGS ARE COMING TO KINGSTON</span>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eggs and home">
          <img src="/eggs-and-logo.png" alt="Eggs and logo" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#first-look">First look</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="nav-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Follow the launch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow">A new breakfast move by Chef Stewie</p>
          <h1>
            Kingston,
            <br />
            how you like
            <br />
            your <em>eggs?</em>
          </h1>
          <p className="hero-deck">
            Big flavour. Soft yolks. Jamaican instinct. Breakfast is about to
            get cracked wide open.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#first-look">
              Get a first look <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
              @eggsandja <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/kingston-breakfast-hero.png"
            alt="Jamaican-inspired fried egg and seasoned chicken breakfast sandwich"
          />
          <div className="stamp" aria-hidden="true">
            <span>GOOD MORNING</span>
            <strong>KNG</strong>
          </div>
          <p className="image-note">Campaign image • Menu reveal coming soon</p>
        </div>
      </section>

      <section className="manifesto" aria-label="Restaurant promise">
        <p>NOT JUST BREAKFAST.</p>
        <p>NOT JUST EGGS.</p>
        <p>ALL KINGSTON ENERGY.</p>
      </section>

      <section className="first-look" id="first-look">
        <div className="section-heading">
          <p className="eyebrow">The first crack</p>
          <h2>Breakfast, with no inside voice.</h2>
          <p>
            The opening menu is still under wraps. Expect familiar Jamaican
            flavour, international technique, and Chef Stewie&apos;s appetite for
            the unexpected.
          </p>
        </div>

        <div className="format-grid">
          <article className="format-card card-red">
            <span className="card-number">01</span>
            <div className="egg-mark" aria-hidden="true"><i /></div>
            <p className="card-kicker">Made to hold</p>
            <h3>Handhelds</h3>
            <p>Soft buns, crisp edges, runny centres, zero restraint.</p>
          </article>
          <article className="format-card card-cream">
            <span className="card-number">02</span>
            <div className="sun-mark" aria-hidden="true" />
            <p className="card-kicker">Made to linger</p>
            <h3>Plates</h3>
            <p>Brunch built in layers, with Jamaica at the centre.</p>
          </article>
          <article className="format-card card-lime">
            <span className="card-number">03</span>
            <div className="cup-mark" aria-hidden="true">&amp;</div>
            <p className="card-kicker">Made to sip</p>
            <h3>Sips &amp; sides</h3>
            <p>Cold, hot, sweet, sharp—and whatever comes after the ampersand.</p>
          </article>
        </div>

        <div className="menu-alert">
          <p><strong>The full menu drops first on Instagram.</strong> Follow now so you do not miss it.</p>
          <a className="button button-red" href={instagramUrl} target="_blank" rel="noreferrer">
            Follow @eggsandja <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="chef-story" id="story">
        <div className="chef-poster" aria-hidden="true">
          <span className="poster-top">THE MIND BEHIND THE MENU</span>
          <strong>STEWIE</strong>
          <span className="poster-bottom">KINGSTON • JAMAICA</span>
        </div>
        <div className="chef-copy">
          <p className="eyebrow">Chef Damion “Stewie” Stewart</p>
          <h2>From breaking plates to cracking eggs.</h2>
          <p className="lead">
            Chef Stewie is the co-owner and executive chef behind Kingston&apos;s
            Broken Plate. His cooking brings Jamaican ingredients into
            conversation with global ideas—and Eggs &amp;….. is the next chapter.
          </p>
          <blockquote>
            “Breakfast should feel familiar for half a second. Then the flavour
            should take you somewhere else.”
          </blockquote>
          <p className="quote-note">A creative statement for Eggs &amp;…..</p>
          <div className="chef-links">
            <a href="https://brokenplatejamaica.com/" target="_blank" rel="noreferrer">
              Explore Broken Plate <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.instagram.com/brokenplateja/" target="_blank" rel="noreferrer">
              @brokenplateja <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-title">
          <p className="eyebrow">Find us soon</p>
          <h2>Kingston,<br />Jamaica.</h2>
        </div>
        <div className="visit-details">
          <div>
            <span>Location</span>
            <strong>Kingston, Jamaica</strong>
            <p>Exact address to be announced.</p>
          </div>
          <div>
            <span>Opening hours</span>
            <strong>Coming soon</strong>
            <p>Follow Instagram for launch dates and service hours.</p>
          </div>
          <div>
            <span>Reservations</span>
            <strong>Opening soon</strong>
            <p>Booking details will be released with the opening menu.</p>
          </div>
        </div>
        <a className="button button-dark visit-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Be first to know <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="social" aria-label="Instagram">
        <div className="social-intro">
          <img src="/eggs-and-logo.png" alt="" aria-hidden="true" />
          <p>For first bites, menu drops, and whatever comes after the ampersand.</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">@eggsandja <span aria-hidden="true">↗</span></a>
        </div>
        <div className="social-tile tile-photo">
          <img src="/kingston-breakfast-hero.png" alt="Close-up of an egg breakfast sandwich" />
        </div>
        <div className="social-tile tile-type" aria-hidden="true">
          <span>RUNNY</span><span>CRISPY</span><span>MESSY</span>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">EGGS &amp;…..</a>
        <p>Kingston, Jamaica • Coming soon</p>
        <div>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
