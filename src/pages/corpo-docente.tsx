import { facultyData } from 'data/data';
import { GetStaticProps } from 'next';
import Faculty, { FacultyTemplateProps } from 'templates/Faculty';

export default function CorpoDocente(props: FacultyTemplateProps) {
  return <Faculty {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      coordinators: facultyData.coordinators,
      teachers: facultyData.teachers
    }
  };
};
