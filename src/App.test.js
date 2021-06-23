import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders the react app', () => {
  const {queryByTestId} = render(<App />)

  expect(queryByTestId('render')).toBeTruthy();

});
