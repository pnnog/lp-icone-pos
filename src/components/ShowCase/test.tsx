import '../../../.jest/match-media-mock';

import ShowCase from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<ShowCase />', () => {
  it('should render ShowCase', () => {
    renderWithTheme(<ShowCase />);
  });
});
