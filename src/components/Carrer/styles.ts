import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    background-color: #ffffff;
    box-shadow: 0 0 0.5rem rgb(0, 0, 0, 0.3);
    border-radius: ${theme.border.radius};

    max-width: 40rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 2fr;
      grid-column-gap: ${theme.spacings.small};
      max-width: 100%;

    `};
  `}
`;

type ImageBox = { img: string };

export const ImageBox = styled.figure<ImageBox>`
  ${({ theme, img }) => css`
    background: #ffffff url(${img}) no-repeat;
    background-size: cover;

    position: relative;
    min-height: 30rem;
    height: 100%;
    width: 100%;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    border-radius: ${theme.border.radius};

    :after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.6rem;
      background-color: ${theme.colors.orange};
      z-index: calc(${theme.layers.base});
    }

    ${media.greaterThan('medium')`
      :after{
        height: .8em;
      }
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
      
    `};
  `}
`;
export const Name = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.extraBold};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
export const Role = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.lightGray};
  `}
`;
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    text-align: justify;
    color: ${theme.colors.lightGray};
  `}
`;
