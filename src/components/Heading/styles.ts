import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import media from 'styled-media-query';

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}

    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    &::before {
      content: '';
      display: inline-block;
      margin-right: ${theme.spacings.xsmall};
      width: 0.7rem;
      height: 3.3rem;
      background-color: ${!!color && theme.colors[color]};
    }

    color: ${!!color && theme.colors[color]};
  `}
`;
