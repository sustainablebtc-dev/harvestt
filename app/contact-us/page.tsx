import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm/ContactForm'
import contactData from '@/data/contact/contact.json'
import { ContactData } from '@/data/types'
import styles from './ContactPage.module.scss'

const data = contactData as ContactData

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
}

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{data.hero.title}</h1>
          <p className={styles.subtitle}>{data.hero.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <ContactForm data={data.form} />
        </div>
      </div>
    </main>
  )
}
