import styled, { css } from 'styled-components';
import { ButtonLinkProps } from '.';
import media from 'styled-media-query';

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
};

export const Wrapper = styled.a<ButtonLinkProps>`
  ${({ theme, fullWidth }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius};
    border: 0;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 3rem;
    cursor: pointer;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    text-decoration: none;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xsmall} ${theme.spacings.xxlarge};
        height: 5rem;
    `}

    &:hover {
      background: linear-gradient(180deg, #0284c7 0%, #075985);
    }

    ${!!fullWidth && wrapperModifiers.fullWidth};
  `}
`;
