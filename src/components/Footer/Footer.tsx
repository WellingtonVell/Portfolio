import { Github, Gmail, LinkedIn } from '@/icons';
import * as S from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = 'Wellington C. Velloso';
  const work = 'Full Stack Developer';

  return (
    <S.Footer>
      <S.Container>
        <p>LOGO</p>
        <S.Name>{name}</S.Name>
        <S.Work>{work}</S.Work>
        <S.Socials>
          <LinkedIn color='#0077B5' />
          <Github color='#2b3137' />
          <Gmail color='#ff4242' />
        </S.Socials>
        <S.Licenses>
          © {currentYear} {name}. All rights reserved.
        </S.Licenses>
        <S.Licenses>Realeased under the MIT License.</S.Licenses>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
