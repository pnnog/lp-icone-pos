import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import ButtonLink from '.';

const props = {
  href: 'https://google.com.br'
};

describe('<ButtonLink />', () => {
  it('should render ButtonLink', () => {
    renderWithTheme(<ButtonLink href={props.href}>Inscreva-se</ButtonLink>);
    const element = screen.getByRole('link', { name: /Inscreva-se/i });
    expect(element).toHaveAttribute('href', props.href);
  });

  it('should render ButtonLink fullWidth', () => {
    renderWithTheme(<ButtonLink fullWidth {...props} />);
    const element = screen.getByRole('link');
    expect(element).toHaveStyle({ width: '100%' });
  });
});
