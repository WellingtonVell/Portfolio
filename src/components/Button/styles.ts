import styled, { css } from 'styled-components';

export const Button = styled.button<{
  variant: 'default' | 'secondary' | 'destructive' | 'outline' | 'link';
  size: 'default' | 'small' | 'large' | 'icon';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  border-radius: 1rem;
  font-size: ${(props) => props.theme.font.sizes.small};
  font-weight: ${(props) => props.theme.font.weight.normal};
  transition: background-color ${(props) => props.theme.transition.default};
  outline: none;
  outline-offset: 0.1rem;

  &:focus-visible {
    box-shadow: 0 0 0 0.5rem rgba(160, 240, 150, 1);
  }

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${({ variant, size }) => css`
    ${variant && variantStyles.variants[variant]}
    ${size && variantStyles.sizes[size]}
  `}
`;

const variantStyles = {
  variants: {
    default: css`
      background-color: ${(props) => props.theme.colors.content};
      color: ${(props) => props.theme.colors.text};
    `,
    secondary: css`
      background-color: ${(props) => props.theme.colors.content};
      color: ${(props) => props.theme.colors.text};
    `,
    destructive: css`
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.text};
    `,
    outline: css`
      border-width: 0.25rem;
      border-color: ${(props) => props.theme.colors.content};
      color: ${(props) => props.theme.colors.text};
    `,
    link: css`
      color: ${(props) => props.theme.colors.text};
      text-underline-offset: 0.5rem;
      &:hover {
        text-decoration-line: underline;
      }
    `,
  },
  sizes: {
    default: css`
      height: 3rem;
      padding: 1rem 2rem;
    `,
    small: css`
      height: 2rem;
      padding: 1rem 2rem;
    `,
    large: css`
      height: 4rem;
      padding: 2rem 3rem;
    `,
    icon: css`
      border-radius: 0;
      height: 3rem;
      width: 3rem;
    `,
  },
};
