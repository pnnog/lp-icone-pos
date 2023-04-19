import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import * as CarrerStyles from 'components/Carrer/styles';
import media from 'styled-media-query';
import Container from 'components/Container';

export const IntroductionSection = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-top: calc(${theme.spacings.xlarge} * 2 );
    
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.xsmall};
      `}
    }

    p {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      line-height: 120%;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xlarge};
        line-height: 120%;
      `}
    }
  `}
`;

export const CoordenatorsSection = styled.section`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      padding-top: 30rem;
      padding-bottom: 20rem;
      background: ${theme.colors.primary};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      position: relative;
      z-index: ${theme.layers.base};


      ${Container}{
        margin-top: -10rem;
      }
    `}

    ${CarrerStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};

      ${media.greaterThan('medium')`
        margin-bottom: calc(${theme.spacings.xlarge} * 2);
      `}
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.medium};
        color: ${theme.colors.white};
        :before {
          background-color: ${theme.colors.white}
        }
      `};
    }
  `}
`;

export const TeachersSection = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${CarrerStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xlarge};

      ${media.greaterThan('medium')`
        margin-bottom: calc(${theme.spacings.xlarge} * 2);
      `}
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.medium};
      `};
    }
  `}
`;
