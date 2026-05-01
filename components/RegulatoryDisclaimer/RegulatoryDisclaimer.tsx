import type { RegulatoryDisclaimerData } from "@/data/types";
import disclaimerRaw from "@/data/footer/regulatory-disclaimer.json";
import styles from "./RegulatoryDisclaimer.module.scss";

const disclaimer = disclaimerRaw as RegulatoryDisclaimerData;

export default function RegulatoryDisclaimer() {
  return (
    <section className={styles.wrapper} aria-label="Regulatory Disclaimer">
      <div className={styles.inner}>
        <p className={styles.heading}>{disclaimer.heading}</p>
        {disclaimer.paragraphs.map((para, i) => (
          <p key={i} className={styles.paragraph}>
            {para}
          </p>
        ))}
        <p className={styles.signature}>{disclaimer.signature}</p>
      </div>
    </section>
  );
}
