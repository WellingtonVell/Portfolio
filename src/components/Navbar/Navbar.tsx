import * as S from './styles';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { NavbarItens } from './NavbarItens';
import { Close, Menu } from '@/icons';
import { useNavbar } from './useNavbar';

const Navbar = () => {
  const { toggleMenu, handlescrollIntoView, isAnimating, activeSection, showMenu, menuRef } =
    useNavbar();

  return (
    <S.Nav>
      <S.Container>
        <Image src={Logo} alt='Logo' width={50} />
        <S.List>
          {NavbarItens.map((item) => (
            <S.Itens
              $isActive={activeSection === item.elementId}
              key={item.elementId}
              onClick={() => {
                handlescrollIntoView(item.elementId);
              }}
            >
              <S.Icon>{item.icon}</S.Icon> <S.Label>{item.label}</S.Label>
            </S.Itens>
          ))}
        </S.List>

        <S.MenuButton onClick={toggleMenu}>{showMenu ? <Close /> : <Menu />}</S.MenuButton>
      </S.Container>

      <S.MenuList $isOpen={showMenu} $isAnimating={isAnimating} ref={menuRef}>
        {NavbarItens.map((item) => (
          <S.Itens
            $isActive={activeSection === item.elementId}
            key={item.elementId}
            onClick={() => handlescrollIntoView(item.elementId)}
          >
            <S.Icon>{item.icon}</S.Icon> <S.Label>{item.label}</S.Label>
          </S.Itens>
        ))}
      </S.MenuList>
    </S.Nav>
  );
};

export default Navbar;
