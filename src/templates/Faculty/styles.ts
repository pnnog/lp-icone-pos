import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import * as CarrerStyles from 'components/Carrer/styles';
import media from 'styled-media-query';

export const Introduction = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.xlarge};

      ${media.greaterThan('medium')`
        margin-top: calc(${theme.spacings.xlarge} * 2);
      `}
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.medium};
      `}
    }

    ${CarrerStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};

      ${media.greaterThan('medium')`
        margin-bottom: calc(${theme.spacings.xlarge} * 2);
      `}
    }
  `};
`;
