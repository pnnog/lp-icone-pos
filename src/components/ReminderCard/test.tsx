import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import ReminderCard from '.';

export const props = {
  date: '29/03/2023',
  title: 'Especialização implantodontia',
  teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
  href: '#'
};

describe('<ReminderCard />', () => {
  it('should render ReminderCard', () => {
    renderWithTheme(<ReminderCard {...props} />);
    //Deve ter o ícone date renderizado
    expect(screen.getByLabelText(/Course Date/i));

    //Deve ter o date renderizado
    expect(screen.getByText(props.date)).toBeInTheDocument();

    //Deve ter o ButtonLink renderizada
    expect(screen.getAllByText(/Inscreva-se/i)[0]).toBeInTheDocument();
    //Deve ter o title renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
    //Deve ter o teacher renderizado
    expect(screen.getByText(props.teacher)).toBeInTheDocument();
  });
});
