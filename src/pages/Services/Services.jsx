import styles from './Services.module.css'
import Section from '@components/Section/Section'
import ServiceCard from '@components/ServiceCard/ServiceCard'
import servicesData from '@data/services.json'

export default function Services({ navigate }) {
  return (
    <main>
      <div className={styles.hero}>
        <p className={styles.heroEyebrow}>Ce oferim</p>
        <h1 className={styles.heroTitle}>SERVICIILE<br />NOASTRE</h1>
        <p className={styles.heroSubtitle}>
          De la zboruri de agrement la cursuri profesionale PPL — 
          avem experiența perfectă pentru fiecare.
        </p>
      </div>

      <Section alt>
        <div className={styles.grid}>
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onDetails={() => navigate('/contact')}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
