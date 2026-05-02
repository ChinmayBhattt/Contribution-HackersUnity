import { MapPin, Calendar, Users } from 'lucide-react';
import { formatDate } from '@/utils/helpers';
import styles from './EventCard.module.css';

export default function EventCard({ event }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{event.icon}</span>
        <span className={styles.type}>{event.type}</span>
      </div>

      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.description}>{event.description}</p>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <Calendar size={14} />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className={styles.detailItem}>
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
        <div className={styles.detailItem}>
          <Users size={14} />
          <span>{event.attendees} attending</span>
        </div>
      </div>

      <a href={event.rsvpLink} className={`btn btn-ghost btn-sm ${styles.rsvpBtn}`}>
        RSVP Now →
      </a>
    </div>
  );
}
