import '../../../.jest/match-media-mock';

import { renderWithTheme } from 'utils/tests/helper';
import Container from '.';

describe('<Container />', () => {
  it('should render Container with styles', () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyle({ 'max-width': '130rem' });
    expect(container.firstChild).toHaveStyle({
      'padding-left': 'calc(${theme.grid.gutter} / 4)'
    });
  });
});
