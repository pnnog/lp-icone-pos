import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-right: auto;
    margin-left: auto;
    padding-left: calc(${theme.grid.gutter} / 4);
    padding-right: calc(${theme.grid.gutter} / 4);
  `}
`;

export default Container;
