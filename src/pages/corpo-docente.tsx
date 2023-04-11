import Faculty from 'templates/Faculty';
import { mockCordinators, mockTeachers } from 'templates/Faculty/mock';

export default function CorpoDocente() {
  return <Faculty teachers={mockTeachers} coordinators={mockCordinators} />;
}
