import styled from 'styled-components';

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.content};
  padding: 3rem 5rem;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  min-height: 15rem;
  place-content: center;
  border-top-width: 0.2rem;
  margin-top: 3rem;
  border-color: ${(props) => props.theme.colors.text};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.p`
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.semiBold};
  font-size: ${(props) => props.theme.font.sizes.medium};
  line-height: 1.2;
`;

export const Work = styled.p`
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.sizes.small};
  line-height: 1.2;
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Licenses = styled.p`
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.sizes.xsmall};
`;