import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = { src: string };
export const Wrapper = styled.section<WrapperProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    height: 25rem;
    position: relative;

    display: grid;
    grid-template-areas: 'float content';
    grid-template-columns: 1.5fr 2fr;

    ${media.greaterThan('medium')`
    height: 35rem;
    grid-template-areas: ' content float';
    grid-template-columns: 3fr 1fr;
    `}

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
    }
  `}
`;
export const FloatImageWrapper = styled.figure`
  ${({ theme }) => css`
    grid-area: float;
    z-index: ${theme.layers.base};
    height: 18rem;
    width: 15rem;
    align-self: end;

    ${media.greaterThan('medium')`
      height: 33rem;
      width: 29rem;
    `}
  `}
`;
export const FloatImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding-top: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    z-index: ${theme.layers.base};

    text-align: right;

    ${media.greaterThan('medium')`
      align-self: end;
      text-align: left;
      padding-top: 0;
      padding-right: 0;
      padding-left: ${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.xxlarge};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};

      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`;
