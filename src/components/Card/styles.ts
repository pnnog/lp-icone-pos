import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};

    box-shadow: 1.8px 3.6px 1.8px rgba(0, 0, 0, 0.25);
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `}
`;

export const ImageBox = styled.figure`
  width: 100%;
  height: 35rem;
  border-radius: inherit;

  ${media.greaterThan('medium')`
    height: 40rem;
  `}

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  word-wrap: break-word;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    text-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.4);
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const More = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    text-align: center;

    border-radius: ${theme.border.radius};
    backdrop-filter: blur(1.5rem);
    background: rgba(2, 132, 199, 0.7);
    box-shadow: 0 0 1rem 01rem rgba(0, 0, 0, 0.35);
    -webkit-backdrop-filter: blur(1.5rem);

    span {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};

      span{
        font-size: ${theme.font.sizes.large};
      }
    
    `}
  `}
`;

const ModalModifiers = {
  isOpen: () => css`
    opacity: 1;
    pointer-events: all;
  `,
  isClose: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

type ModalProps = {
  isOpen?: boolean;
};

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.layers.modal};
    overflow: auto;

    display: flex;
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.small};

    backdrop-filter: blur(1.5rem);
    -webkit-backdrop-filter: blur(1.5rem);
    background: rgba(0, 0, 0, 0.7);

    transition: opacity 0.3s ease-out;

    ${!!isOpen && ModalModifiers.isOpen()}
    ${!isOpen && ModalModifiers.isClose()};

    ${media.greaterThan('medium')`
      display:flex;
      justify-content: center;
      background: rgba(12, 74, 110, .8);
    `}
  `}
`;

export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    color: ${theme.colors.white};
    text-align: right;

    svg {
      margin: ${theme.spacings.xxsmall};

      ${media.greaterThan('large')`
        margin: ${theme.spacings.small};
      `}
    }
  `}
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    width: min(100%, 90rem);
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xxlarge};
    `}

    ${Title} {
      text-shadow: none;
      position: relative;
      margin-bottom: calc(${theme.spacings.small}*2);

      ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.6rem;
        bottom: -2rem;
        left: 0;
        background-color: ${theme.colors.secondary};
      }

      ${media.greaterThan('medium')`
        margin-bottom: ${theme.spacings.xxlarge};

        ::after{
          background-color: ${theme.colors.white};
        }
      `}
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding-bottom: ${theme.spacings.small};
    text-align: justify;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
