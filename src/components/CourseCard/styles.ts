import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: 1.8px 3.6px 1.8px rgba(0, 0, 0, 0.25);
    background-color: ${theme.colors.white};
  `}
`;

export const ImageBox = styled.figure`
  height: 18rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

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

  ${media.greaterThan('medium')`
  height: 24rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
    word-wrap: break-word;
    margin: ${theme.spacings.xsmall};
    a {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.medium};
      a {
        font-size: ${theme.font.sizes.medium};
      }

    `}
  `}
`;
