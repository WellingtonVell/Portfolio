import { Books, Contact, Gears, Home } from '@/icons';

export const NavbarItens = [
  {
    label: 'Home',
    elementId: 'home',
    icon: <Home size={20} />,
  },
  {
    label: 'Contact',
    elementId: 'contact',
    icon: <Contact size={20} />,
  },
  {
    label: 'Projects',
    elementId: 'projects',
    icon: <Gears size={20} />,
  },
  {
    label: 'Knowledge',
    elementId: 'knowledge',
    icon: <Books size={20} />,
  },
];
