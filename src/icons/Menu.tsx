import { IconProps } from '@/types/Icons';

const Menu = ({ size = 30, color = 'currentColor' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu</title>
      <path
        d='M4 6H20M4 12H20M4 18H20'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Menu;
