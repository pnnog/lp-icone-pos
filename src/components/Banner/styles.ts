import styled from 'styled-components';
import { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: relative;
`;

type imageBoxProps = {
  img: string;
};

export const ImageWrapper = styled.figure<imageBoxProps>`
  ${({ theme, img }) => css`
    background: #ffffff url(${img}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 44rem;
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
      height: 58rem;
  `};
  `}
`;
