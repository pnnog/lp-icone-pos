import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;

  ${media.greaterThan('medium')`
  gap: 7.2rem
  `}
`;
