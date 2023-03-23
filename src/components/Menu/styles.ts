import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.small} 0;
    display: flex;
    justify-content: end;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
      `}
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

export const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    a {
      margin-left: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    position: relative;
    color: ${theme.colors.white};
    cursor: pointer;
    font-weight: ${theme.font.extraBold};

    &:hover {
      ::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.white};
        animation: hoverAnimation 0.2s forwards;
        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
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
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};

    background-color: ${theme.colors.secondary};

    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      color: ${theme.colors.white};
      width: 2.5rem;
      margin: ${theme.spacings.small};
      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;
    }

    ${MenuLink} {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      margin: 0 0 ${theme.spacings.small} 0;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;
