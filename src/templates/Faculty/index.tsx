import Base from 'templates/Base';
import * as S from './styles';
import Carrer, { CarrerProps } from 'components/Carrer';
import Container from 'components/Container';
import ShowCase from 'components/ShowCase';
import Heading from 'components/Heading';

type FacultyProps = {
  coordinators: CarrerProps[];
  teachers: CarrerProps[];
};
const Faculty = ({ coordinators, teachers }: FacultyProps) => (
  <Base>
    <S.Introduction>
      <ShowCase heading="Corpo docente">
        Convocamos um corpo docente referência em Implantodontia na Bahia.Nossa
        equipe está empenhada em promover uma experiência única de aprendizado.
        Confira!
      </ShowCase>
    </S.Introduction>

    <Container>
      <S.Content>
        <Heading> Professores Coordenadores </Heading>
        {coordinators.map((coordinator) => (
          <Carrer key={coordinator.name} {...coordinator} />
        ))}

        <Heading> Professores </Heading>
        {teachers.map((teacher) => (
          <Carrer key={teacher.name} {...teacher} />
        ))}
      </S.Content>
    </Container>
  </Base>
);

export default Faculty;
