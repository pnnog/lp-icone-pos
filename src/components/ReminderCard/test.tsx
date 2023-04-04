import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import MockReminderCard from './mock';
import ReminderCard from '.';

describe('<ReminderCard />', () => {
  it('should render ReminderCard', () => {
    renderWithTheme(<ReminderCard {...MockReminderCard} />);
    //Deve ter o ícone date renderizado
    expect(screen.getByLabelText(/Course Date/i));

    //Deve ter o date renderizado
    expect(screen.getByText(MockReminderCard.date)).toBeInTheDocument();

    //Deve ter o ButtonLink renderizada
    expect(screen.getAllByText(/Inscreva-se/i)[0]).toBeInTheDocument();
    //Deve ter o title renderizado
    expect(
      screen.getByRole('heading', { name: MockReminderCard.title })
    ).toBeInTheDocument();
    //Deve ter o teacher renderizado
    expect(screen.getByText(MockReminderCard.teacher)).toBeInTheDocument();
  });
});
