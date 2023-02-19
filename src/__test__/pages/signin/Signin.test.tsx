import Signin from '@/pages/signin';
import { render, screen } from '@testing-library/react';

describe('Signin Page', () => {
  test('should render correctly', () => {
    render(<Signin />);

    const LoginHeading = screen.getByText(/Log in/i);
    expect(LoginHeading).toBeDefined();
  });
});
