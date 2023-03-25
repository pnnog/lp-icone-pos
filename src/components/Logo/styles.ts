import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModifier = {
  footer: () => css`
    width: 9.9rem;
    height: 2.8rem;

    ${media.greaterThan('medium')`
    width: 23.2rem;
    height: 6.2rem;
    `}
  `,

  header: () => css`
    width: 22.1rem;
    height: 4.7rem;

    ${media.greaterThan('medium')`
    width: 24.2rem;
    height: 6.2rem;
    `}
  `
};

export const Wrapper = styled.figure<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifier[size]}
  `}
`;
