import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    padding-left: calc(${theme.grid.gutter} / 4);
    padding-right: calc(${theme.grid.gutter} / 4);

    width: 100%;
    max-width: ${theme.grid.container};
    margin-right: auto;
    margin-left: auto;
  `}
`;

export default Container;
