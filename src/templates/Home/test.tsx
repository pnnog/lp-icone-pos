import '../../../.jest/match-media-mock';

import HomeTemplate from '.';
import { renderWithTheme } from 'utils/tests/helper';
import mockHome from './mock';

describe('<HomeTemplate />', () => {
  it('should render HomeTemplate', () => {
    renderWithTheme(<HomeTemplate {...mockHome} />);
  });
});
