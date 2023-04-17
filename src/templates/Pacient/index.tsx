import Base from 'templates/Base';
import * as S from './styles';
import Heading from 'components/Heading';
import Grid from 'components/Grid';
import Card, { CardProps } from 'components/Card';

type PacientTemplateProps = {
  cards: CardProps[];
};

const PacientTemplate = ({ cards }: PacientTemplateProps) => (
  <Base>
    <S.SectionCards>
      <Heading>Próteses</Heading>
      <Grid>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Grid>
    </S.SectionCards>
  </Base>
);

export default PacientTemplate;
