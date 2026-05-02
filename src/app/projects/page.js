'use client';
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import FilterTabs from '@/components/FilterTabs';
import AnimatedSection from '@/components/AnimatedSection';
import { projects } from '@/data/projects';
import styles from './projects.module.css';

const techFilters = ['All', 'React', 'Python', 'Solidity', 'Flutter', 'Node.js'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.techStack.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <>
      <section className={styles.hero}><div className="container"><AnimatedSection><SectionHeading label="Showcase" title="Project Showcase" subtitle="Explore winning projects built at hackathons by our community" /></AnimatedSection></div></section>
      <section className="section"><div className="container">
        <FilterTabs tabs={techFilters} activeTab={activeFilter} onChange={setActiveFilter} />
        <div className={styles.grid}>{filtered.map(p => <ProjectCard key={p.id} project={p} />)}</div>
        {filtered.length === 0 && <p className={styles.empty}>No projects match this filter.</p>}
      </div></section>
    </>
  );
}
