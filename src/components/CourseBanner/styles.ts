import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/ButtonLink/styles';
import media from 'styled-media-query';
type WrapperProps = {
  img: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, img }) => css`
    background: url(${img}) no-repeat;
    background-size: cover;
    background-position: center center;

    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    height: 50rem;

    ${ButtonStyles.Wrapper} {
      position: relative;
      z-index: ${theme.layers.base};
      max-width: 37.5rem;
      width: 100%;
    }

    ${media.greaterThan('large')`
      padding: ${theme.spacings.xlarge} calc(${theme.spacings.xlarge} * 2);
    `}

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};

    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
    text-align: center;
    padding-top: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      font-size: calc(${theme.font.sizes.xlarge} * 2);
      font-weight: ${theme.font.extraBold};
      line-height: 6.4rem;
    `};
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 2.4rem;
    bottom: 13rem;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('large')`
      gap: ${theme.spacings.medium};
      left:9.6rem;
    `}

    ${media.greaterThan('huge')`
      bottom:50%;
      transform:translateY(50%);
    `}
  `}
`;

export const IconWrapper = styled.figure`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    color: ${theme.colors.orange};
    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;
export const Info = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InfoContent = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.xsmall};`}
  `}
`;

export const InfoTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.extraBold};
  `}
`;
export const InfoDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.extraBold};
  `}
`;
