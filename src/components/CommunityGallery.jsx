import Image from 'next/image';
import styles from './CommunityGallery.module.css';

const photos = [
  { src: '/gallery/1.jpg' },
  { src: '/gallery/2.jpg' },
  { src: '/gallery/HUHackstorm.JPG' },
  { src: '/gallery/3.jpg' },
  { src: '/gallery/HUHackstorm3.jpg' },
  { src: '/gallery/HUHackstorm4.jpg' },
  { src: '/gallery/HuEvents1.jpg' },
  { src: '/gallery/HuEvents2.jpg' },
];

export default function CommunityGallery() {
  return (
    <div className={styles.grid}>
      {photos.map((photo, i) => (
        <div key={i} className={styles.card}>
          <Image src={photo.src} alt={`Community moment ${i + 1}`} fill className={styles.image} />
          <div className={styles.overlay} />
        </div>
      ))}
    </div>
  );
}
