import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.small};
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.small};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.medium};

      }

      .slick-list {
      margin: 0 -${theme.spacings.medium};
    }
    `}

    .slick-prev,
    .slick-next {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.white};
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      cursor: pointer;
      z-index: ${theme.layers.base};
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
