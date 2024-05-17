import styled, { keyframes } from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.content};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  font-size: ${(props) => props.theme.font.sizes.xsmall};

  @media (max-width: 728px) {
    display: none;
  }
`;

export const Itens = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #fff;
  }

  color: ${({ $isActive }) => ($isActive ? '#0000ff' : 'inherit')};

  @media (max-width: 728px) {
    justify-content: center;
    width: 100%;
    border-radius: 1rem;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Icon = styled.span`
  transition: transform 0.6s ease;
  &:hover {
    transform: scaleX(-1);
  }
`;

export const Label = styled.p`
  &:hover {
    text-underline-offset: 0.5rem;
    text-decoration-line: underline;
  }
`;

export const MenuButton = styled.span`
  display: none;
  cursor: pointer;

  @media (max-width: 728px) {
    display: block;
  }
`;

const SlideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const MenuList = styled.ul<{ $isOpen: boolean; $isAnimating: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: fixed;
  right: 0;
  top: 7.3rem;
  z-index: 100;
  width: 65%;
  padding: 2rem;
  border-radius: 1rem;
  border-width: 0.25rem;
  background-color: ${(props) => props.theme.colors.content};
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  animation: ${({ $isOpen }) => ($isOpen ? SlideIn : SlideOut)} 0.5s ease forwards;
  visibility: ${({ $isOpen, $isAnimating }) => ($isOpen || $isAnimating ? 'visible' : 'hidden')};
`;
