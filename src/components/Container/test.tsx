import '../../../.jest/match-media-mock';

import { renderWithTheme } from 'utils/tests/helper';
import Container from '.';

describe('<Container />', () => {
  it('should render Container with styles', () => {
    const { debug, container } = renderWithTheme(<Container />);

    debug(container);

    expect(container.firstChild).toHaveStyle({ 'max-width': '130rem' });
    expect(container.firstChild).toHaveStyle({ 'padding-left': '9rem' });
  });
});
