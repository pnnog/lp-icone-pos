import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import { ArrowUpward } from '@styled-icons/material-outlined/ArrowUpward';

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

  it('should render buttonLink with medium size', () => {
    renderWithTheme(<ButtonLink {...props} size="medium" />);
    const element = screen.getByRole('link');
    expect(element).toHaveStyle({ height: '3rem' });
  });

  it('should render buttonLink with large size', () => {
    renderWithTheme(<ButtonLink size="large" {...props} />);
    const element = screen.getByRole('link');
    expect(element).toHaveStyle({ height: '5rem' });
  });

  it('should render buttonLink with icon', () => {
    renderWithTheme(
      <ButtonLink
        icon={
          <ArrowUpward aria-label="Back to top" data-testid="id de teste" />
        }
        {...props}
      />
    );
    const element = screen.getByTestId(/id de teste/i);
    expect(element).toBeInTheDocument();
  });
});
