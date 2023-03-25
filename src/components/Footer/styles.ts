import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium} 0;
  `}
`;

export const TopFooter = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${theme.spacings.xxsmall};
    border-bottom: 0.15rem solid ${theme.colors.white};

    ${media.greaterThan('medium')`
      padding-bottom: ${theme.spacings.medium};
      border-bottom: .3rem solid ${theme.colors.white};
    `}
  `}
`;

export const SocialContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    nav {
      display: flex;
      justify-content: space-between;
      width: 8rem;

      a {
        color: ${theme.colors.white};
        width: 1.3rem;
        transition: colors 0.3 ease-in-out;

        :hover {
          color: ${theme.colors.secondary};
        }
      }
    }

    ${media.greaterThan('medium')`

      nav{
        width:14.2rem;

        a {
          width: 3rem;
          height: 3rem;
        }

      }
    `}
  `}
`;
export const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Logo2 = styled.figure`
  width: 5.2rem;
  height: 1.5rem;

  ${media.greaterThan('medium')`
  width: 21rem;
  height: 5.6rem;
  `}
`;
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const BottomFooter = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;
  `}
`;

export const Address = styled.div`
  ${({ theme }) => css`
    width: 16.7rem;
    a {
      font-size: 0.8rem;
      color: ${theme.colors.white};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }

    ${media.greaterThan('medium')`
      width: 30rem;

      a{
        font-size:${theme.font.sizes.small};
        font-weight:${theme.font.regular};
      }
    `}
  `}
`;
export const Contact = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    p {
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: 0.8rem;
      font-weight: ${theme.font.regular};
    }
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }

    ${media.greaterThan('medium')`
      p{
        font-size: ${theme.font.sizes.small};
      }
      svg {
      width: 2.7rem;
      height: 2.7rem;
      margin-right:${theme.spacings.xxsmall}
    }

    `}
  `}
`;
