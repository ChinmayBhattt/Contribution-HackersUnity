'use client';
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import FilterTabs from '@/components/FilterTabs';
import HackathonCard from '@/components/HackathonCard';
import AnimatedSection from '@/components/AnimatedSection';
import { hackathons, hackathonFilters } from '@/data/hackathons';
import { Search } from 'lucide-react';
import styles from './hackathons.module.css';

export default function HackathonsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = hackathons.filter(h => {
    const matchesFilter = activeFilter === 'All' || h.mode === activeFilter || h.domain === activeFilter;
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <section className={styles.heroBanner}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="Explore" title="Browse All Hackathons" subtitle="Find your next challenge from 500+ hackathons" />
            <div className={styles.searchBar}>
              <Search size={18} />
              <input type="text" placeholder="Search hackathons by name, tag, or domain..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={styles.searchInput} aria-label="Search hackathons" />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FilterTabs tabs={hackathonFilters} activeTab={activeFilter} onChange={setActiveFilter} />
          <div className={styles.grid}>
            {filtered.map((h) => <HackathonCard key={h.id} hackathon={h} />)}
          </div>
          {filtered.length === 0 && <p className={styles.empty}>No hackathons found matching your criteria. Try a different filter or search term.</p>}
        </div>
      </section>
    </>
  );
}
