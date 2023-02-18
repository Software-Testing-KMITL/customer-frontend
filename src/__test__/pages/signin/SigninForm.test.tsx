import { render, screen } from '@testing-library/react';
import { SigninForm } from '@/sections/signin';

describe('Signin Form', () => {
  test('should render correctly', () => {
    render(<SigninForm />);

    const UsernameInput = screen.getByLabelText(/username/i);
    expect(UsernameInput).toBeDefined();

    const PasswordInput = screen.getByLabelText(/password/i);
    expect(PasswordInput).toBeDefined();
    expect(PasswordInput).toHaveProperty('type', 'password');

    const SubmitButton = screen.getByRole('button', { name: /sign in/i });
    expect(SubmitButton).toBeDefined();
  });
});
