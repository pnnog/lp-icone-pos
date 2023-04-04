import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import MockBannerSlider from './mock';

import BannerSlider from '.';

describe('<BannerSlider />', () => {
  it('should render BannerSlider with reminder data', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={MockBannerSlider} />
    );

    expect(
      screen.getByText('Especialização implantodontia')
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('img', {
        name: 'Aperfeiçoamento em implantodontia',
        hidden: true
      })
    ).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
