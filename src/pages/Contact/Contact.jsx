import { useState } from 'react'
import styles from './Contact.module.css'
import Section from '@components/Section/Section'
import Button from '@components/Button/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    service: '',
    duration: '',
    name: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className={styles.hero}>
        <p className={styles.heroEyebrow}>Să ne cunoaștem</p>
        <h1 className={styles.heroTitle}>CONTACT</h1>
        <p className={styles.heroSubtitle}>
          Rezervați un zbor sau cereți mai multe detalii. Suntem mereu disponibili.
        </p>
      </div>

      <Section alt>
        <div className={styles.grid}>
          {/* Info Card */}
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>INFORMAȚII</h2>
            <p className={styles.infoSubtitle}>
              Suntem disponibili zilnic pentru a vă ajuta să planificați experiența perfectă.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Telefon</div>
                  <a href="tel:+37376014777" className={styles.contactItemValue}>
                    +373 760 14 777
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Email</div>
                  <div className={styles.contactItemValue}>info@aeroteam.md</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Adresă</div>
                  <div className={styles.contactItemValue}>Moldova, Aerodromul Horești</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Viber / WhatsApp</div>
                  <div className={styles.contactItemValue}>+373 760 14 777</div>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>PROGRAM</h3>
            <div className={styles.hoursGrid}>
              <span className={styles.hoursLabel}>Luni – Vineri</span>
              <span className={styles.hoursValue}>09:00 – 19:00</span>
              <span className={styles.hoursLabel}>Sâmbătă – Duminică</span>
              <span className={styles.hoursValue}>08:00 – 20:00</span>
            </div>
          </div>

          {/* Form Card */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>OK</div>
                <h3 className={styles.successTitle}>MULȚUMIM!</h3>
                <p className={styles.successText}>
                  Cererea dumneavoastră a fost trimisă. Vă vom contacta în cel mai scurt timp.
                </p>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>REZERVARE</h2>
                <p className={styles.formSubtitle}>Completați formularul și vă vom contacta noi.</p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Serviciu</label>
                    <select name="service" className={styles.formSelect} value={formData.service} onChange={handleChange}>
                      <option value="">Alegeți serviciul</option>
                      <option>Zbor cu avion Sting</option>
                      <option>Zbor cu avion Cessna</option>
                      <option>Zbor cu avion Pipistrel</option>
                      <option>Salt cu Parașuta</option>
                      <option>Cursuri PPL</option>
                      <option>Cerere în Căsătorie</option>
                      <option>Gender Party</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Durata</label>
                    <select name="duration" className={styles.formSelect} value={formData.duration} onChange={handleChange}>
                      <option value="">Alegeți durata</option>
                      <option>15 minute</option>
                      <option>30 minute</option>
                      <option>45 minute</option>
                      <option>60 minute</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Nume, Prenume</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                      placeholder="Ion Popescu"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      className={styles.formInput}
                      placeholder="+373 7X XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Mesaj (opțional)</label>
                    <textarea
                      name="message"
                      className={styles.formTextarea}
                      placeholder="Scrieți orice detalii suplimentare..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <p className={styles.formDisclaimer}>
                    Făcând clic pe "Trimite", sunteți de acord cu prelucrarea datelor cu caracter personal.
                  </p>

                  <Button type="submit" fullWidth size="large">
                    Trimite cererea
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Map */}
      <div className={styles.mapSection}>
        <div className={styles.mapInner}>
          <h3 className={styles.mapTitle}>CUM AJUNGEȚI?</h3>
          <p className={styles.mapSubtitle}>Aerodromul Horești, Moldova</p>
          <div className={styles.mapEmbed}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87038.11!2d28.85!3d47.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd5b!2sHore%C8%99ti%2C%20Moldova!5e0!3m2!1sro!2s!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              title="Aerodromul Horești"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
