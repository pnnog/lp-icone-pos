import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 15%;
    left: 5%;
    background-color: ${theme.colors.white};
    width: 20rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    overflow-x: hidden;

    ${media.greaterThan('medium')`
      width: 35rem;
      padding: ${theme.spacings.medium} ${theme.spacings.small};
    `}

    ${media.greaterThan('large')`
    `}
  `}
`;
export const DateWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.secondary};
    overflow-x: hidden;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
    margin-bottom: ${theme.spacings.xsmall};

    svg {
      width: 4rem;
      height: 4rem;
      margin-right: ${theme.spacings.xsmall};
    }
    `}
  `}
`;
export const Date = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    `}

    span {
      font-weight: ${theme.font.extraBold};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxxlarge};
    margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Teacher = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightBlue};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.regular};
    text-decoration: underline;
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
    `}
  `}
`;
