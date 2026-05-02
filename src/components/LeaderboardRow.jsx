import { getInitials, getRandomBrandColor } from '@/utils/helpers';
import styles from './LeaderboardRow.module.css';

export default function LeaderboardRow({ entry }) {
  const isTop3 = entry.rank <= 3;
  const rankEmojis = { 1: '🥇', 2: '🥈', 3: '🥉' };

  return (
    <div className={`${styles.row} ${isTop3 ? styles.topRow : ''}`}>
      <div className={styles.rank}>
        {isTop3 ? rankEmojis[entry.rank] : `#${entry.rank}`}
      </div>

      <div className={styles.userInfo}>
        <div
          className={styles.avatar}
          style={{ background: getRandomBrandColor(entry.rank) }}
        >
          {getInitials(entry.name)}
        </div>
        <div>
          <p className={styles.name}>{entry.name}</p>
          <p className={styles.college}>{entry.college}</p>
        </div>
      </div>

      <div className={styles.points}>
        <span className={styles.pointsValue}>{entry.points.toLocaleString()}</span>
        <span className={styles.pointsLabel}>pts</span>
      </div>

      <div className={styles.badges}>
        {entry.badges.map((badge, i) => (
          <span key={i} className={styles.badgeIcon}>{badge}</span>
        ))}
      </div>
    </div>
  );
}
