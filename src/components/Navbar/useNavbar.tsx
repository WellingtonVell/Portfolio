import { useEffect, useRef, useState } from 'react';

export const useNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleCickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

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

    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleCickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleCickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlescrollIntoView = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { toggleMenu, handlescrollIntoView, menuRef, showMenu };
};
