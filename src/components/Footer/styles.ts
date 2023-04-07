import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as HeadingsStyles from 'components//Heading/styles';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge}* 2);
      padding-bottom: ${theme.spacings.xsmall};`}
  `}
`;

export const Logos = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${theme.spacings.xxsmall};
    border-bottom: 0.12rem solid ${theme.colors.white};

    ${media.greaterThan('medium')`
      padding-bottom: ${theme.spacings.medium};
      border-bottom: .3rem solid ${theme.colors.white};
    `}
  `}
`;

export const Logo2 = styled.figure`
  width: 10rem;

  ${media.greaterThan('medium')`
  width: 22rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);

    `};
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    ${HeadingsStyles.Wrapper} {
      text-transform: uppercase;
      display: block;
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
      color: ${theme.colors.white};
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    a,
    p {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.regular};
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    a {
      :hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const Copy = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.font.sizes.xxxlarge};
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};

    ${media.greaterThan('medium')`
      margin-top: calc(${theme.font.sizes.xxlarge}*2);
    `}
  `}
`;
