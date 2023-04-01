import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > a {
      text-decoration: none;
    }
  `}
`;
export const ImageBox = styled.figure`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    max-width: 100%;
    height: 18rem;
    background: #f6f7f8;

    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeHolderShimmer 1s linear infinite forwards;

    @keyframes placeHolderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
    img {
      box-shadow: 0rem 0.16rem 0.16rem rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
      border-radius: ${theme.border.radius};
    }

    ${media.greaterThan('medium')`
    height: 37rem;
    `}
  `}
`;
export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    height: 100%;
  `}
`;
export const DateBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.gray};

    svg {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      svg{
        width: 3.2rem;
        height: 3.2rem
      }
    `}
  `}
`;
export const Date = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.xxsmall};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.black};
    max-width: 100%;
    text-decoration: underline;
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.medium}
    `};
  `}
`;
