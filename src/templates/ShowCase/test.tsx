import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';

import ShowCase from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<ShowCase />', () => {
  it('should render ShowCase', () => {
    renderWithTheme(<ShowCase />);
  });
});
