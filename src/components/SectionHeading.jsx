import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.wrapper} ${align === 'center' ? styles.center : styles.left}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={`heading-lg gradient-text ${styles.title}`}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
