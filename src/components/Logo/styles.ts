import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModifier = {
  small: () => css`
    width: 10.2rem;
    height: 3.6rem;
  `
};

export const Wrapper = styled.figure<LogoProps>`
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
