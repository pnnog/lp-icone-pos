import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { BannerProps } from 'components/Banner';
import { renderWithTheme } from 'utils/tests/helper';

import BannerSlider from '.';

const itemsTest: BannerProps[] = [
  {
    title: 'Especialização em implantodontia ',
    img: 'https://source.unsplash.com/user/willianjusten/1440x495',
    date: '25/03/2023',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com',
    reminder: true
  },

  {
    title: 'Aperfeiçoamento em implantodontia',
    img: 'https://source.unsplash.com/user/willianjusten/1440x495',
    date: '29/03/2023',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com'
  },

  {
    title: 'Implantodontia ',
    img: 'https://source.unsplash.com/user/willianjusten/1440x495',
    date: '25/03/2024',
    teacher: 'Dr. Sandro Bittencourt | Dr. Márcio Marchionni',
    href: 'https://web.whatsapp.com',
    reminder: true
  }
];

describe('<BannerSlider />', () => {
  it('should render BannerSlider with reminder data', () => {
    const { container, debug } = renderWithTheme(
      <BannerSlider items={itemsTest} />
    );

    expect(
      screen.getByText('Especialização em implantodontia')
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('img', {
        name: 'Aperfeiçoamento em implantodontia',
        hidden: true
      })
    ).not.toBeInTheDocument();

    expect(screen.getByText('Implantodontia')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
