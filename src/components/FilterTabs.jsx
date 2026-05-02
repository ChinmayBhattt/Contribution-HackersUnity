'use client';

import { useState } from 'react';
import styles from './FilterTabs.module.css';

export default function FilterTabs({ tabs = [], activeTab, onChange }) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Filter tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => onChange(tab)}
          role="tab"
          aria-selected={activeTab === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
