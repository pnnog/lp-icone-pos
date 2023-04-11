import styled, { DefaultTheme, css } from 'styled-components';
import media from 'styled-media-query';
import { CarrerProps } from '.';

type WrapperProps = Pick<CarrerProps, 'toRight'>;

const wrapperModifiers = {
  toRight: (theme: DefaultTheme) => css`
    grid-template-areas: 'description image';

    ${Description} {
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    }
  `,
  toLeft: (theme: DefaultTheme) => css`
    grid-template-areas: 'image description';
    ${Description} {
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, toRight }) => css`
    width: 100%;
    height: 100%;

    background: ${theme.colors.white};
    box-shadow: 0 11rem 3rem 0 rgba(143, 177, 200, 0.22);
    border-radius: ${theme.border.radius};

    display: grid;
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      ${!!toRight && wrapperModifiers.toRight(theme)};
      ${!toRight && wrapperModifiers.toLeft(theme)};
     
    `}
  `}
`;

export const ImageBox = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 25rem;
    align-self: end;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall} 0
      ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      grid-area: image;
      height: 30rem;
  `} img {
      max-width: 25rem;
      height: 100%;
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1rem;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(12, 74, 110, 1) 18%,
        rgba(63, 147, 186, 1) 61%,
        rgba(233, 245, 247, 1) 100%
      );
    }

    ${media.greaterThan('medium')`
      ::after{
        height: 1.2rem;
        
      }
    `}
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.extraBold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xxsmall};

    `}
  `}
`;
export const Role = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    `}
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};

    h3,
    p,
    li {
      text-align: justify;
      color: ${theme.colors.white};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
      list-style: none;
    }

    li {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.regular};
      line-height: ${theme.font.sizes.xxlarge};
    }

    ${media.greaterThan('medium')`
      grid-area: description;
      li{
        font-size: ${theme.font.sizes.medium};
      }
    
    `}
  `}
`;
