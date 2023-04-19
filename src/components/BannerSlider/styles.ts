import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
      border: none !important;

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

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper}{
        max-width: 104rem;
        width:100%;
        margin:auto;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0.4rem 0.5rem 0px;
      }
    `}


    ${media.greaterThan('huge')`
      .slick-dots {
        right: 15rem;
      }
      
      .slick-next, .slick-prev {
        right: 15rem; 
      } 
    `}
  `}
`;
