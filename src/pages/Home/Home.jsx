import styles from './Home.module.css'
import Button from '@components/Button/Button'
import Section from '@components/Section/Section'
import ServiceCard from '@components/ServiceCard/ServiceCard'
import ReviewCard from '@components/ReviewCard/ReviewCard'
import servicesData from '@data/services.json'
import reviewsData from '@data/reviews.json'
import statsData from '@data/stats.json'

export default function Home({ navigate }) {
  const featuredServices = servicesData.slice(0, 3)
  const featuredReviews = reviewsData.slice(0, 3)

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowLine} />
            Aerodromul Horești · Moldova
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>ATINGE</span>
            <span className={styles.heroTitleLine}>NORII</span>
            <span className={styles.heroTitleAccent}>CU MÂNA</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Zboruri sportive, salturi cu parașuta și cursuri PPL. 
            Cel mai frumos cadou e o experiență care rămâne pentru totdeauna.
          </p>
          <div className={styles.heroActions}>
            <Button size="large" onClick={() => navigate('/servicii')}>
              Rezervă un zbor
            </Button>
            <Button size="large" variant="secondary" onClick={() => navigate('/contact')}>
              Contactează-ne
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {statsData.map(stat => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section alt id="despre">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImages}>
            <img
              src="https://static.tildacdn.one/tild3434-3431-4934-a665-303739616666/stingro.png"
              alt="Zbor cu avionul"
              className={styles.aboutImg1}
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=600&q=80"
              alt="Salt cu parașuta"
              className={styles.aboutImg2}
              loading="lazy"
            />
            <div className={styles.aboutBadge}>
              <div className={styles.aboutBadgeNum}>5+</div>
              <div className={styles.aboutBadgeText}>Ani de zbor</div>
            </div>
          </div>
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>Cine suntem</span>
            <h2 className={styles.aboutTitle}>
              PASIONAȚI<br />DE ZBOR<br />
              <span style={{ color: 'var(--color-accent)' }}>DIN INIMĂ</span>
            </h2>
            <p className={styles.aboutDesc}>
              Aero Team Moldova este mai mult decât o companie de aviație — suntem o echipă de entuziaști care transformă visul de a zbura în realitate pentru sute de oameni în fiecare an.
            </p>
            <p className={styles.aboutDesc}>
              Cu sediul pe aerodromul Horești, oferim servicii certificate și experiențe de neuitat, de la zboruri de agrement la cursuri profesionale PPL.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <span className={styles.featureIcon}>—</span>
                <span>Piloti certificati EASA cu mii de ore de zbor</span>
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureIcon}>—</span>
                <span>Avioane sportive modern intretinute</span>
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureIcon}>—</span>
                <span>Siguranta pasagerilor — prioritatea noastra #1</span>
              </div>
              <div className={styles.aboutFeature}>
                <span className={styles.featureIcon}>—</span>
                <span>Zburam tot anul, in orice anotimp</span>
              </div>
            </div>
            <Button onClick={() => navigate('/echipa')}>
              Cunoaște echipa →
            </Button>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="Ce oferim"
        title="SERVICIILE NOASTRE"
        subtitle="Pentru iubitorii de lucruri speciale. Alegeți experiența care vi se potrivește."
      >
        <div className={styles.servicesGrid}>
          {featuredServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onDetails={() => navigate('/servicii')}
            />
          ))}
        </div>
        <div className={styles.moreServices}>
          <Button variant="outline" onClick={() => navigate('/servicii')}>
            Toate serviciile →
          </Button>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section
        alt
        eyebrow="Ce spun clienții"
        title="RECENZII"
        subtitle="Peste 2000 de oameni au zburat cu noi. Iată ce spun ei."
      >
        <div className={styles.reviewsGrid}>
          {featuredReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className={styles.moreServices}>
          <Button variant="outline" onClick={() => navigate('/recenzii')}>
            Toate recenziile →
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>GATA SĂ ZBORI?</h2>
          <p className={styles.ctaSubtitle}>
            Un zbor cu avionul este cel mai frumos și uimitor cadou! 
            Contactați-ne acum și rezervați experiența vieții voastre.
          </p>
          <div className={styles.ctaActions}>
            <Button size="large" onClick={() => navigate('/contact')}>
              Rezerva acum
            </Button>
            <Button size="large" variant="secondary" href="tel:+37376014777">
              +373 760 14 777
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
