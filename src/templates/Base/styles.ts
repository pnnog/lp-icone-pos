import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1 0 auto;
  padding-top: 6.3rem;

  ${media.greaterThan('medium')`
  padding-top: 7.8rem;

`}
`;
export const SectionFooter = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
     clip-path:polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
     `}
  `}
`;
