import PacientTemplate from 'templates/Pacient';
import { mockPacientCards } from 'components/Card/mock';

export default function Paciente() {
  return <PacientTemplate cards={mockPacientCards} />;
}
