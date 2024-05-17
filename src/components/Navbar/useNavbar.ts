import { useEffect, useRef, useState } from 'react';
import { NavbarItens } from './NavbarItens';

export const useNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    if (showMenu) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMenu(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setShowMenu(true);
    }
  };

  const handlescrollIntoView = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    const handleResize = () => {
      if (showMenu && window.innerWidth > 728) {
        setShowMenu(false);
      }
    };

    const handleCickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleCickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleCickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    const sections = NavbarItens.map((item) => document.getElementById(item.elementId));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return { toggleMenu, handlescrollIntoView, isAnimating, menuRef, showMenu, activeSection };
};
