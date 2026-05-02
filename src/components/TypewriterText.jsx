'use client';

import { useState, useEffect } from 'react';

export default function TypewriterText({ texts = [], speed = 80, deleteSpeed = 40, pauseTime = 2000, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className} aria-label={texts[textIndex]}>
      {displayText}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1em',
          background: 'var(--accent-primary)',
          marginLeft: '2px',
          animation: 'typewriter-blink 0.8s ease-in-out infinite',
          verticalAlign: 'text-bottom',
        }}
        aria-hidden="true"
      />
    </span>
  );
}
