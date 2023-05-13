import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

test('App', () => {});
describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    // expect(App).();

    //     await waitFor(() => {
    //       screen.getByText(/메가반점/);
    //       screen.getByText(/메리김밥/);
    // });
  });
});
