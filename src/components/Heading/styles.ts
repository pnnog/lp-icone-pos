import styled, { DefaultTheme, css } from 'styled-components';
import { HeadingProps } from '.';
import media from 'styled-media-query';

type ColorProps = 'primary' | 'white' | 'orange';

const wrapperModifiers = {
  left: (theme: DefaultTheme, color: ColorProps) => css`
    &::before {
      content: '';
      display: inline-block;
      margin-right: ${theme.spacings.xsmall};
      width: 0.7rem;
      height: 3.3rem;
      background-color: ${!!color && theme.colors[color]};
    }
  `,

  bottom: (theme: DefaultTheme, color: ColorProps) => css`
    ::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 10%;
      height: 0.4rem;
      background-color: ${!!color && theme.colors[color]};
    }
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, line }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `} ${!!line && !!color && wrapperModifiers[line](theme, color)};
  `}
`;
