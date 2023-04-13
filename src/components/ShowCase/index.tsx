import * as S from './styles';

import Heading from 'components/Heading';
import NewsSlider from 'components/NewsSlider';
import { NewsCardProps } from 'components/NewsCard';
import PacientHighlight, {
  PacientHighlightProps
} from 'components/PacientHighlight';

export type ShowCaseProps = {
  heading?: string;
  news?: NewsCardProps[];
  pacientHighlight?: PacientHighlightProps;
  children?: React.ReactNode;
};
const ShowCase = ({
  heading,
  news,
  pacientHighlight,
  children
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && <Heading>{heading} </Heading>}
    {!!children && <p>{children}</p>}
    {!!news && <NewsSlider items={news} />}
    {!!pacientHighlight && <PacientHighlight {...pacientHighlight} />}
  </S.Wrapper>
);

export default ShowCase;
