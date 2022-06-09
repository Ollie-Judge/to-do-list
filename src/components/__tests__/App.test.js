import { render, screen } from '@testing-library/react';
import App from '../../App';

test('looks at the placeholder of the note title', () => {
  render(<App />);
  const titlePlaceHolder = screen.getByText(/To Do/i);
  expect(titlePlaceHolder).toBeInTheDocument();
});
