import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModifier = {
  small: () => css`
    width: 10.2rem;
    height: 3.6rem;
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ small }) => css`
    width: 22.1rem;
    height: 4.7rem;

    ${media.greaterThan('medium')`
      width: 24.2rem;
      height: 6.2rem;
    `};

    ${!!small && wrapperModifier.small()}
  `}
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
