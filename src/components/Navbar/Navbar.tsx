import * as S from './styles';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { NavbarItens } from './NavbarItens';

const Navbar = () => {
  const handlescrollIntoView = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.Nav>
      <S.Container>
        <Image src={Logo} alt='Logo' width={50} />
        <S.List>
          {NavbarItens.map((item) => (
            <S.Itens key={item.elementId} onClick={() => handlescrollIntoView(item.elementId)}>
              <S.Icon>{item.icon}</S.Icon> <S.Label>{item.label}</S.Label>
            </S.Itens>
          ))}
        </S.List>
      </S.Container>
    </S.Nav>
  );
};

export default Navbar;
