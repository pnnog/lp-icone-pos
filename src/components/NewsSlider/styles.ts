import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-slide > div {
      margin: 0 calc(${theme.spacings.small} / 2);
      flex: 1 0 auto;
    }

    .slick-list {
      margin: 0 calc(-${theme.spacings.small} / 2);
    }

    ${media.greaterThan('medium')`
    .slick-slide > div {
      margin: 0 calc(${theme.spacings.medium});
    }

    .slick-list {
      margin: 0 calc(-${theme.spacings.medium});
      }
    `}

    .slick-list,
    .slick-track {
      display: flex;
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      z-index: ${theme.layers.base};
      width: 2.4rem;
      height: 2.4rem;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      cursor: pointer;
      display: block;
    }

    .slick-prev {
      left: -5.6rem;
    }

    .slick-next {
      right: -5.6rem;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
