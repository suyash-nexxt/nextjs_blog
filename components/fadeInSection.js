import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Landing.module.css';

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`${styles.fade_in_section} ${
        isVisible ? styles.is_visible : ''
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
