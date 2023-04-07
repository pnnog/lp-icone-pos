import styled from 'styled-components';
import { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div``;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
    margin-bottom: calc(${theme.spacings.xlarge}*2)`}
  `}
`;
