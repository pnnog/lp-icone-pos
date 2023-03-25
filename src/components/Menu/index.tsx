import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseMenuIcon } from '@styled-icons/material-outlined';
import { useState } from 'react';
import Link from 'next/link';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Link href="/">
          <Logo size="header" />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Cursos</S.MenuLink>
          <S.MenuLink href="#">A escola</S.MenuLink>
          <S.MenuLink href="#">Corpo Docente</S.MenuLink>
          <S.MenuLink href="#">Notícias</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon
            role="button"
            aria-label="open menu"
            onClick={() => setIsOpen(true)}
          />
        </S.IconWrapper>
      </MediaMatch>

      <S.FullMenu isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseMenuIcon
          role="button"
          aria-label="close menu"
          onClick={() => setIsOpen(false)}
        />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Cursos</S.MenuLink>
          <S.MenuLink href="#">A escola</S.MenuLink>
          <S.MenuLink href="#">Corpo docente</S.MenuLink>
          <S.MenuLink href="#">Notícias</S.MenuLink>
        </S.MenuNav>
      </S.FullMenu>
    </S.Wrapper>
  );
};

export default Menu;
