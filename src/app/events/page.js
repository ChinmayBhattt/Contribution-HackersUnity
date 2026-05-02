'use client';
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import FilterTabs from '@/components/FilterTabs';
import EventCard from '@/components/EventCard';
import AnimatedSection from '@/components/AnimatedSection';
import { events, eventTypes } from '@/data/events';
import styles from './events.module.css';

export default function EventsPage() {
  const [activeType, setActiveType] = useState('All');
  const filtered = activeType === 'All' ? events : events.filter(e => e.type === activeType);

  return (
    <>
      <section className={styles.hero}><div className="container"><AnimatedSection><SectionHeading label="Events" title="Meetups & Events Calendar" subtitle="Workshops, meetups, contests, and hackathons happening soon" /></AnimatedSection></div></section>
      <section className="section"><div className="container">
        <FilterTabs tabs={eventTypes} activeTab={activeType} onChange={setActiveType} />
        <div className={styles.grid}>{filtered.map(e => <EventCard key={e.id} event={e} />)}</div>
        {filtered.length === 0 && <p className={styles.empty}>No events found for this category.</p>}
      </div></section>
    </>
  );
}
