import { Github, Gmail, LinkedIn } from '@/icons';
import * as S from './styles';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = 'Wellington C. Velloso';
  const work = 'Full Stack Developer';

  return (
    <S.Footer>
      <S.Container>
        <Image src={Logo} alt='Logo' width={150} />
        <S.Name>{name}</S.Name>
        <S.Work>{work}</S.Work>
        <S.Socials>
          <Link href='https://www.linkedin.com/in/wellington-costavell' target='_blank'>
            <LinkedIn color='#0077B5' />
          </Link>
          <Link href='https://github.com/WellingtonVell' target='_blank'>
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
