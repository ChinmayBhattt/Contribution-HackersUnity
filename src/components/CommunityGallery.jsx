'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './CommunityGallery.module.css';

const photos = [
  { src: '/gallery/1.jpg', label: 'Hackstorm Kickoff' },
  { src: '/gallery/2.jpg', label: 'Team Building' },
  { src: '/gallery/HUEvents3.jpg', label: 'Workshop Session' },
  { src: '/gallery/3.jpg', label: 'Coding Sprint' },
  { src: '/gallery/HuTeam.jpg', label: 'The Unity Team' },
  { src: '/gallery/HuEvents4.jpg', label: 'Networking' },
  { src: '/gallery/HuEvents5.jpg', label: 'Hands-On Lab' },
  { src: '/gallery/HuEvents1.jpg', label: 'Mentorship' },
  { src: '/gallery/HuEvents2.jpg', label: 'Tech Talk' },
  { src: '/gallery/4.jpg', label: 'Demo Day' },
  { src: '/gallery/5.jpg', label: 'Award Ceremony' },
  { src: '/gallery/6.jpg', label: 'Community Meetup' },
];

// Calculate sphere positions: 3 rows × 4 columns
const RADIUS = 340;
const cardPositions = [];
const ROWS = 3;
const PER_ROW = 4;

for (let row = 0; row < ROWS; row++) {
  const tiltX = (row - 1) * 26; // -26°, 0°, 26°
  const offset = row % 2 === 1 ? 45 : 0; // stagger middle row
  for (let col = 0; col < PER_ROW; col++) {
    const rotY = col * (360 / PER_ROW) + offset;
    cardPositions.push({ rotateX: tiltX, rotateY: rotY });
  }
}

export default function CommunityGallery() {
  const [rotation, setRotation] = useState({ x: -8, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(-1);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: -8, y: 0 });
  const rafRef = useRef(null);

  // Keep ref in sync
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  // Animation loop: auto-rotate + momentum
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const dt = Math.min((now - lastTime) / 16.67, 3); // normalize to ~60fps
      lastTime = now;

      const vel = velocityRef.current;
      const rot = rotationRef.current;

      if (!isDragging && hoveredCard === -1) {
        // Auto-rotate + apply momentum decay
        const newY = rot.y + (0.12 + vel.y) * dt;
        const newX = rot.x + vel.x * dt;

        // Decay momentum
        vel.y *= 0.96;
        vel.x *= 0.96;
        if (Math.abs(vel.y) < 0.001) vel.y = 0;
        if (Math.abs(vel.x) < 0.001) vel.x = 0;

        // Smoothly return X to -8
        const targetX = -8;
        const dampedX = newX + (targetX - newX) * 0.02 * dt;

        setRotation({ x: dampedX, y: newY });
      } else if (!isDragging && hoveredCard !== -1) {
        // Hovered: slow gentle spin
        const newY = rot.y + 0.03 * dt;
        setRotation(prev => ({ ...prev, y: newY }));
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDragging, hoveredCard]);

  // Drag handlers
  const handlePointerDown = useCallback((e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    velocityRef.current = { x: 0, y: 0 };
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    velocityRef.current = { x: -dy * 0.08, y: dx * 0.08 };

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - dy * 0.25)),
      y: prev.y + dx * 0.25,
    }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className={styles.gallerySection}>
      {/* Ambient background effects */}
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />
      <div className={styles.gridLines} />

      {/* Globe */}
      <div
        className={styles.globeViewport}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Wireframe sphere hint */}
        <div className={styles.wireframeSphere} />

        <div
          className={`${styles.globe} ${isDragging ? styles.globeDragging : ''}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {photos.map((photo, i) => {
            const pos = cardPositions[i];
            const isActive = hoveredCard === i;

            return (
              <div
                key={i}
                className={`${styles.orbitCard} ${isActive ? styles.cardActive : ''}`}
                style={{
                  transform: `rotateY(${pos.rotateY}deg) rotateX(${pos.rotateX}deg) translateZ(${RADIUS}px)`,
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(-1)}
              >
                {/* Animated border beam */}
                <div className={styles.borderBeam}>
                  <div className={styles.borderBeamInner} />
                </div>

                {/* Card content */}
                <div className={styles.cardInner}>
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    sizes="(max-width: 480px) 120px, (max-width: 768px) 150px, 190px"
                    className={styles.image}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className={styles.hoverOverlay}>
                    <span className={styles.cardLabel}>{photo.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint text */}
      <div className={styles.hintBar}>
        <span className={styles.hintDot} />
        <span>Drag to Navigate • Hover to Explore</span>
      </div>
    </div>
  );
}
