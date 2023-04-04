import '../../../.jest/match-media-mock';
import { render, screen } from '@testing-library/react';

import Home from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Home />', () => {
  it('should render Home', () => {
    renderWithTheme(<Home />);
  });
});
