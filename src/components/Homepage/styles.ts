import styled, { keyframes } from 'styled-components';

/* Hero */
export const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 5rem 5rem;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  cursor: default;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-15%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.font.sizes.xlarge};
  color: ${(props) => props.theme.colors.content};
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.45);
  animation: ${bounce} 1.5s infinite;
  text-align: center;

  @media (max-width: 728px) {
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
`;

export const Work = styled.span`
  font-size: ${(props) => props.theme.font.sizes.medium};

  @media (max-width: 728px) {
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;

export const Myself = styled.span`
  border-radius: 10rem;
  overflow: hidden;
`;

/* Contact */

export const ContactContainer = styled.div`
  display: flex;
  padding: 10rem 20rem;

  @media (max-width: 728px) {
    padding: 1rem 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.sizes.xlarge};
  text-decoration-line: underline;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.sizes.small};
  max-width: 50rem;

  @media (max-width: 728px) {
    max-width: 60%;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Social = styled.p`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  font-style: italic;
  cursor: default;
`;

export const Link = styled.p`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  color: #0000ff;
  font-style: italic;
  text-decoration-line: underline;
  text-underline-offset: 0.5rem;
`;
