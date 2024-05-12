import { IconProps } from '@/types/Icons';

const Home = ({ size = 30, color = 'currentColor' }: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      version='1.1'
      id='_x32_'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <title>Home</title>
      <g>
        <path
          fill={color}
          d='M392.859,6.031L123.288,66.938l0.91,1.692l-0.782-0.51L0,256.273l26.488,17.374l4.457-6.804v139.261
		l254.107,99.866l209.756-104.105V228.575L512,221.753L392.859,6.031z M270.335,466.165l-91.76-36.065V325.503l-62.872-18.629v98.51
		l-53.085-20.866V218.561l78.208-119.232l120.232,221.945l3.856-1.519l5.421-2.147V466.165z M463.136,382.226l-164.858,81.829
		V306.52l164.858-65.383V382.226z'
        />
      </g>
    </svg>
  );
};

export default Home;
