import '../../../.jest/match-media-mock';

import Home from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home />);
  });
});
