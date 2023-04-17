import * as S from './styles';

import Heading from 'components/Heading';
import NewsSlider from 'components/NewsSlider';
import { NewsCardProps } from 'components/NewsCard';
import Highlight, { HighlightProps } from 'components/Highlight';

export type ShowCaseProps = {
  heading?: string;
  news?: NewsCardProps[];
  highlight?: HighlightProps;
  children?: React.ReactNode;
};
const ShowCase = ({ heading, news, highlight, children }: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && <Heading>{heading} </Heading>}
    {!!children && <p>{children}</p>}
    {!!news && <NewsSlider items={news} />}
    {!!highlight && <Highlight {...highlight} />}
  </S.Wrapper>
);

export default ShowCase;
