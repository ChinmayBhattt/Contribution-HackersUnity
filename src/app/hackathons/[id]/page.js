'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, Users, Trophy, MapPin, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { getHackathonById } from '@/data/hackathons';
import { getCountdown, formatDateRange } from '@/utils/helpers';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './detail.module.css';

export default function HackathonDetailPage() {
  const params = useParams();
  const hackathon = getHackathonById(params.id);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!hackathon) return;
    setCountdown(getCountdown(hackathon.deadline));
    const timer = setInterval(() => setCountdown(getCountdown(hackathon.deadline)), 1000);
    return () => clearInterval(timer);
  }, [hackathon]);

  if (!hackathon) return <div className="container section" style={{ textAlign: 'center' }}><h2>Hackathon not found</h2><Link href="/hackathons" className="btn btn-ghost" style={{ marginTop: 16 }}>← Back to Hackathons</Link></div>;

  const statusBadge = hackathon.status === 'LIVE' ? <span className="badge badge-live"><span className="pulse-dot"/>LIVE</span> : hackathon.status === 'UPCOMING' ? <span className="badge badge-upcoming">UPCOMING</span> : <span className="badge badge-ended">ENDED</span>;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection>
            <Link href="/hackathons" className={styles.backLink}><ArrowLeft size={16} /> All Hackathons</Link>
            <div className={styles.heroHeader}>
              <div className={styles.heroInfo}>
                <div className={styles.badges}>{statusBadge}<span className="badge badge-new">{hackathon.mode}</span></div>
                <h1 className="heading-lg">{hackathon.name}</h1>
                <p className={styles.org}>{hackathon.organizerLogo} {hackathon.organizer}</p>
                <p className={styles.desc}>{hackathon.description}</p>
              </div>
              <div className={styles.sideCard}>
                <div className={styles.prizeCard}>
                  <span className={styles.prizeLabel}>Prize Pool</span>
                  <span className={styles.prizeValue}>{hackathon.prize}</span>
                </div>
                {hackathon.status !== 'ENDED' && (
                  <div className={styles.countdownCard}>
                    <span className={styles.countdownLabel}><Clock size={14} /> Deadline</span>
                    <div className={styles.countdownGrid}>
                      {[{ v: countdown.days, l: 'Days' }, { v: countdown.hours, l: 'Hours' }, { v: countdown.minutes, l: 'Min' }, { v: countdown.seconds, l: 'Sec' }].map(u => (
                        <div key={u.l} className={styles.countdownUnit}><span className={styles.countdownVal}>{String(u.v).padStart(2, '0')}</span><span className={styles.countdownLbl}>{u.l}</span></div>
                      ))}
                    </div>
                  </div>
                )}
                <a href={hackathon.registrationLink} className="btn btn-primary btn-lg" style={{ width: '100%', textAlign: 'center' }}>
                  {hackathon.status === 'ENDED' ? 'View Results' : 'Register Now →'}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.detailGrid}`}>
          <div className={styles.mainContent}>
            <div className={styles.infoSection}>
              <h2 className="heading-sm">About This Hackathon</h2>
              <p className="text-body">{hackathon.description}</p>
              <p className="text-body">Join {hackathon.participants}+ participants in this exciting {hackathon.domain} hackathon. Build innovative solutions, learn new skills, and compete for amazing prizes.</p>
            </div>
            <div className={styles.infoSection}>
              <h2 className="heading-sm">Details</h2>
              <div className={styles.detailsList}>
                <div className={styles.detailItem}><Calendar size={16} /><div><span className={styles.detailLabel}>Dates</span><span className={styles.detailValue}>{formatDateRange(hackathon.startDate, hackathon.endDate)}</span></div></div>
                <div className={styles.detailItem}><MapPin size={16} /><div><span className={styles.detailLabel}>Mode</span><span className={styles.detailValue}>{hackathon.mode}</span></div></div>
                <div className={styles.detailItem}><Users size={16} /><div><span className={styles.detailLabel}>Team Size</span><span className={styles.detailValue}>{hackathon.teamSize} members</span></div></div>
                <div className={styles.detailItem}><Trophy size={16} /><div><span className={styles.detailLabel}>Prize Pool</span><span className={styles.detailValue}>{hackathon.prize}</span></div></div>
              </div>
            </div>
            <div className={styles.infoSection}>
              <h2 className="heading-sm">Tags</h2>
              <div className={styles.tagsList}>{hackathon.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
