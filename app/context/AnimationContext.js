'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      
      // Section detection logic
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimationContext.Provider value={{ activeSection, hasScrolled }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}