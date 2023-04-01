import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ImageWrapper = styled.figure`
  height: 44rem;

  ${media.greaterThan('medium')`
  height: 49.5rem;
  `}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
