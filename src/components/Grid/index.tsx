import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.xsmall} 0;

    ${media.greaterThan('medium')`
        margin: ${theme.spacings.medium} 0;
    `}
  `}
`;

export default Grid;
