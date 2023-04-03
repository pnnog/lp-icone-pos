import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const SectionMenu = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Content = styled.div`
  flex: 1 0 auto;
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
