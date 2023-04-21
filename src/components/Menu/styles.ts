import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperPops = {
  isScrolling: boolean;
} & Pick<FullMenuProps, 'isOpen'>;

export const Wrapper = styled.header<WrapperPops>`
  ${({ theme, isOpen, isScrolling }) => css`
    position: fixed;
    min-width: 100%;
    top: 0;
    z-index: ${!isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};
    background: ${theme.colors.primary};
    opacity: ${isScrolling && !isOpen ? '0.8' : '1'};
    transition: opacity 0.3s ease-in-out;
  `}
`;

export const Menu = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} calc(${theme.grid.gutter} / 4);

    width: 100%;
    max-width: ${theme.grid.container};
    margin-right: auto;
    margin-left: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.greaterThan('medium')`
      
    `};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    a {
      display: inline-block;
      margin-left: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.medium};
      text-decoration: none;
      position: relative;
      color: ${theme.colors.white};
      cursor: pointer;
      font-weight: ${theme.font.bold};

      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0;
        height: 0.3rem;
        background-color: ${theme.colors.orange};
        transition: width 0.4s ease-out;
      }

      &:hover {
        ::after {
          width: 100%;
        }
      }
    }
  `}
`;

type FullMenuProps = {
  isOpen: boolean;
};

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;

    pointer-events: ${isOpen ? 'all' : 'none'};
    background-color: ${theme.colors.secondary};
    z-index: ${isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      color: ${theme.colors.white};
      width: 3rem;
      margin: ${theme.spacings.small};
      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;

      a {
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        margin: 0 0 ${theme.spacings.small} 0;
        transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
        transition: transform 0.3s ease-in-out;

        ${media.greaterThan('medium')`
          font-size: ${theme.font.sizes.xlarge};
          font-weight: ${theme.font.bold};
          margin: 0 0 ${theme.spacings.medium} 0;
        `}
      }
    }
  `}
`;
