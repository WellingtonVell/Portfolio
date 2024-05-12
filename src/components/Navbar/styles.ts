import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
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
`;

export const Itens = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: #fff;
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
