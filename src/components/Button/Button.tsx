import { ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'link';
  size?: 'default' | 'small' | 'large' | 'icon';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'submit', variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <S.Button type={type} variant={variant} size={size} ref={ref} {...props}>
        {children}
      </S.Button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
