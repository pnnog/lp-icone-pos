import { GetStaticProps } from 'next';
import { pacienteData } from 'data/data';

import PacientTemplate from 'templates/Pacient';
import { mockPacientCards } from 'components/Card/mock';

export default function Paciente() {
  return <PacientTemplate cards={mockPacientCards} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
