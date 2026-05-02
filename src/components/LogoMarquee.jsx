import styles from './LogoMarquee.module.css';
import { sponsorLogos } from '@/data/sponsors';

export default function LogoMarquee() {
  const logos = [...sponsorLogos, ...sponsorLogos];
  return (
    <div className={styles.marquee} aria-label="Partner companies">
      <div className={styles.track}>
        {logos.map((name, i) => (
          <div key={i} className={styles.logo}>{name}</div>
        ))}
      </div>
    </div>
  );
}
