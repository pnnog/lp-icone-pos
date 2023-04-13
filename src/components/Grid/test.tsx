import Grid from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Grid />', () => {
  it('should render Grid', () => {
    const { container } = renderWithTheme(<Grid> children </Grid>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        grid-gap: 3.2rem;
        margin: 1.6rem 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: 3.2rem 0;
        }
      }

      <div
        class="c0"
      >
         children 
      </div>
    `);
  });
});
