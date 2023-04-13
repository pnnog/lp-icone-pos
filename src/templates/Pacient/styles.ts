import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import Container from 'components/Container';
import media from 'styled-media-query';

export const SectionCards = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.xlarge};
      ${media.greaterThan('medium')`
        margin-top: calc(${theme.spacings.xlarge}*2);
      `};
    }
  `}
`;
