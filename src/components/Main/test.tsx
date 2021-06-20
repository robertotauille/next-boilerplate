import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main />', () => {
  it('Deve renderizar o titulo', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Next.JS Boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar a descrição', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /go go go robertinho!/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
