import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Container from 'components/Container';
import * as HeadingStyles from 'components/Heading/styles';
import * as CoursesStyles from 'components/CourseCardSlider/styles';

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
    margin-bottom: calc(${theme.spacings.xlarge} * 2 );

    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.medium};
        margin-top: calc(${theme.spacings.large}*2);
    `};
    }

    ${CoursesStyles.Wrapper} {
      ${media.lessThan('medium')`
          margin-right: calc(-${theme.grid.gutter} / 4);
          `}
    }
  `}
`;
