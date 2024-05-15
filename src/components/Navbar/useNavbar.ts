import { useEffect, useRef, useState } from 'react';
import { NavbarItens } from './NavbarItens';

export const useNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');

  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlescrollIntoView = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const determineCurrentSection = () => {
      var navigation = document.querySelector('nav');
      const navigationHeight = navigation ? navigation.offsetHeight + 55 : 74;
      const middleOfScreen = window.innerHeight / 2;

      console.log(navigationHeight);

      let cs = '';

      NavbarItens.forEach((item) => {
        const element = document.getElementById(item.elementId);
        const elementPosition = element?.getBoundingClientRect().top || 0;

        if (elementPosition <= navigationHeight + middleOfScreen) {
          cs = item.label;
        }
      });

      return cs;
    };

    setCurrentSection(determineCurrentSection());

    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
      setCurrentSection(determineCurrentSection());
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

  return { toggleMenu, handlescrollIntoView, menuRef, showMenu, currentSection };
};
