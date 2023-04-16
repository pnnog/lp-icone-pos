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
    renderWithTheme(
      <ButtonLink fullWidth {...props}>
        Ver mais
      </ButtonLink>
    );
    const element = screen.getByRole('link', { name: /Ver mais/i });
    expect(element).toHaveStyle({ width: '100%' });
  });
});
