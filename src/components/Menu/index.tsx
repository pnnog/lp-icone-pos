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
    <S.Wrapper isOpen={isOpen}>
      <Link href="/">
        <Logo size="header" />
      </Link>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
          <Link href="/"> Home</Link>
          <Link href="/"> Cursos</Link>
          <Link href="/"> Corpo Docente</Link>
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch lessThan="large">
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
          <Link href="/"> Home</Link>
          <Link href="/"> Cursos</Link>
          <Link href="/"> Corpo Docente</Link>
        </S.MenuNav>
      </S.FullMenu>
    </S.Wrapper>
  );
};

export default Menu;
