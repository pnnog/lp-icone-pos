import Base from 'templates/Base';
import * as S from './styles';
import Carrer, { CarrerProps } from 'components/Carrer';
import Container from 'components/Container';
import Heading from 'components/Heading';

export type FacultyTemplateProps = {
  coordinators: CarrerProps[];
  teachers: CarrerProps[];
};
const FacultyTemplate = ({ coordinators, teachers }: FacultyTemplateProps) => {
  return (
    <Base>
      <S.IntroductionSection>
        <Heading>Corpo docente</Heading>
        <p>
          Convocamos um corpo docente referência em Implantodontia na
          Bahia.Nossa equipe está empenhada em promover uma experiência única de
          aprendizado. <strong>Confira!</strong>
        </p>
      </S.IntroductionSection>

      <S.CoordenatorsSection>
        <Container>
          <Heading>Professores Coordenadores</Heading>
          {coordinators.map((coordinator) => (
            <Carrer key={coordinator.name} {...coordinator} />
          ))}
        </Container>
      </S.CoordenatorsSection>

      <S.TeachersSection>
        <Heading> Professores </Heading>
        {teachers.map((teacher) => (
          <Carrer key={teacher.name} {...teacher} />
        ))}
      </S.TeachersSection>
    </Base>
  );
};
export default FacultyTemplate;
