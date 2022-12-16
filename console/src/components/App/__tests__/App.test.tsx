import { render } from '@testing-library/react';
import App from '..';

describe('App', () => {
  it('Should render correctly', async () => {
    // Write test to confirm render of sites list
    render(<App />);
    expect(true).toBeFalsy();
  });

  it('Should order sites by size', async () => {
    // Write test to confirm sites in size order when user changes dropdown
    render(<App />);
    expect(true).toBeFalsy();
  });
});
