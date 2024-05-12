import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
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

export const Itens = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #fff;
  }

  @media (max-width: 728px) {
    justify-content: center;
    width: 100%;
    border-radius: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Icon = styled.span`
  transition: transform 0.3s ease;
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

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: fixed;
  right: 0;
  width: 65%;
  padding: 2rem;
  border-radius: 1rem;
  border-width: 0.25rem;
  background-color: ${(props) => props.theme.colors.content};
  font-size: ${(props) => props.theme.font.sizes.xsmall};
`;
