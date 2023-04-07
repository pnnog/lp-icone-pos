import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Container from 'components/Container';
import * as HeadingStyles from 'components/Heading/styles';
import * as CoursesStyles from 'components/CourseCardSlider/styles';
import * as PacientBannerStyles from 'components/PacientBanner/styles';
import * as NewsCardSlider from 'components/NewsSlider/styles';

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    >p{
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      line-height: 120%;
    }

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2 );

      >p{
        font-size: ${theme.font.sizes.xlarge};
        line-height: 120%;
    }

    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.medium};
    `};
    }

    ${(CoursesStyles.Wrapper, NewsCardSlider.Wrapper)} {
      ${media.lessThan('medium')`
          margin-right: calc(-${theme.grid.gutter} / 4);
        `}
    }

    ${PacientBannerStyles.Wrapper}{
      ${media.lessThan('medium')`
          margin: 0 calc(-${theme.grid.gutter} / 4);
        `}
    }}
  `}
`;
