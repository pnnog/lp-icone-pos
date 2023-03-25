import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.figure`
  ${({ theme }) => css`
    height: 15rem;
    background-color: transparent;
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      height: 48.2rem;
    `}
  `}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0.1rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;

export const Name = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.medium};
    text-decoration: underline;
    text-align: center;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.extraBold};
    `}
  `}
`;
