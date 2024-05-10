import { Github, Gmail, LinkedIn } from '@/icons';
import * as S from './styles';
import Link from 'next/link';

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
          <Link href='https://www.linkedin.com/in/wellington-costavell'>
            <LinkedIn color='#0077B5' />
          </Link>
          <Link href='https://github.com/WellingtonVell'>
            <Github color='#ffffff' />
          </Link>
          <Link href='mailto:wellingtonvell@gmail.com'>
            <Gmail color='#ff4242' />
          </Link>
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
