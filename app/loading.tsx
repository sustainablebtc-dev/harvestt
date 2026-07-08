import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <p className={styles.text}>Loading…</p>
    </div>
  )
}
