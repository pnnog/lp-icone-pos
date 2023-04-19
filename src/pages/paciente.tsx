import { GetStaticProps } from 'next';
import { pacienteData } from 'data/data';

import PacientTemplate from 'templates/Pacient';

export default function Paciente() {
  return <PacientTemplate cards={pacienteData.cards} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
