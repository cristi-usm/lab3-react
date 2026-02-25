import styles from './Team.module.css'
import Section from '@components/Section/Section'
import TeamCard from '@components/TeamCard/TeamCard'
import teamData from '@data/team.json'

export default function Team() {
  return (
    <main>
      <div className={styles.hero}>
        <p className={styles.heroEyebrow}>Oamenii din spatele zborurilor</p>
        <h1 className={styles.heroTitle}>ECHIPA<br />NOASTRĂ</h1>
        <p className={styles.heroSubtitle}>
          Piloți certificați EASA, instructori cu experiență vastă și pasionați de aviație.
        </p>
      </div>

      <Section alt>
        <div className={styles.grid}>
          {teamData.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Section>
    </main>
  )
}
