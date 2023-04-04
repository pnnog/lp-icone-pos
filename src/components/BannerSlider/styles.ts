import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: -0.1rem;
    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin-top: ${theme.spacings.large};

      li {
        background-color: transparent;
        border: 0.1rem solid ${theme.colors.secondary};
        border-radius: 50%;
        width: 1.3rem;
        height: 1.3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};

        ${media.greaterThan('medium')`
        width: 1.6rem;
        height: 1.6rem;
        `}

        &.slick-active {
          opacity: 0.75;
          background-color: ${theme.colors.secondary};
        }
      }

      button {
        opacity: 0;
        font-size: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    .slick-slide {
      visibility: hidden;

      &.slick-active.slick-current {
        visibility: visible;
      }
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      z-index: ${theme.layers.base};
      width: 3rem;
      height: 3rem;
      border: 1px solid ${theme.colors.secondary};
      border-radius: 50%;
      cursor: pointer;
      right: 4.5rem;
      color: ${theme.colors.secondary};
    }

    .slick-next {
      top: 37%;
    }
    .slick-prev {
      top: 30%;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    ${media.greaterThan('medium')`
      .slick-dots {
        position:absolute;
        flex-direction:column;
        right: 4.3rem;
        top:50%;
        margin:0;


        li{
          margin-top:${theme.spacings.xxsmall};
        }

      }
    `}
  `}
`;
