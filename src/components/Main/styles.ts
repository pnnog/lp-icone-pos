import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
  `}
`;
