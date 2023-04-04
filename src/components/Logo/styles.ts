import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModifier = {
  footer: () => css`
    width: 10rem;

    ${media.greaterThan('medium')`
    width: 22rem;
    `}
  `,

  header: () => css`
    width: 22rem;
    height: 4.7rem;

    ${media.greaterThan('medium')`
    width: 24.2rem;
    height: 6.2rem;
    `}
  `
};

export const Wrapper = styled.figure<LogoProps>`
  ${({ size }) => css`
    svg {
      width: 100%;
      height: 100%;
    }
    ${!!size && wrapperModifier[size]}
  `}
`;
