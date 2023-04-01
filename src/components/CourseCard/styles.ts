import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    box-shadow: 1.8px 3.6px 1.8px rgba(0, 0, 0, 0.25);
  `}
`;

export const ImageBox = styled.figure`
  min-height: 14rem;
  width: 100%;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Image = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 100%;
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small} ;
    `};
  `}
`;

export const Caption = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    display: inline-block;
    word-break: break-word;
    width: 13.6rem;

    &:hover {
      text-decoration: underline;
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      padding: ${theme.spacings.small} 0;
      width: 22.5rem;
    `};
  `}
`;
