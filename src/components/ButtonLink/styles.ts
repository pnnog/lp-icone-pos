import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonLinkProps } from '.';

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};

    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 3rem;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxlarge};
    height: 5rem;
  `,
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonLinkProps,
  'fullWidth' | 'size'
>;

export const Wrapper = styled.a<WrapperProps>`
  ${({ theme, fullWidth, size, hasIcon }) => css`
    font-weight: ${theme.font.medium};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: ${theme.border.radius};
    border: 0;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #0284c7 0%, #075985);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth};
    ${!!hasIcon && wrapperModifiers.hasIcon(theme)}
  `}
`;
