import Container from 'components/Container';
import styled from 'styled-components';
import { css } from 'styled-components';
import media from 'styled-media-query';

import * as GridStyles from 'components/Grid';

export const Wrapper = styled.div``;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge}*2);
    `}
  `}
`;

export const SectionCourses = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge}*2);
    `}

    ${GridStyles.Grid} {
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
  `}
`;
