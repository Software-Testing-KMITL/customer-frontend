import { render, screen, fireEvent } from '@testing-library/react';
import { SigninForm } from '@/sections/signin';
import { userInfo } from 'os';

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

  test('should show eror message when username is empty', async () => {
    render(<SigninForm />);

    const UsernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(UsernameInput, { target: { value: '' } });

    const SubmitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.submit(SubmitButton);

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    /*  const ErrorMessage = screen.getByText(/Username is required/i);
      expect(ErrorMessage).toBeDefined();*/
  });

  test('should show error message when password is empty', async () => { })

  test('should show error message when username/password is incorrect', async () => { });

  test('onSubmit function is called when username and password is valid', async () => {
    render(<SigninForm />);

    const SubmitButton = screen.getByRole('button', { name: /sign in/i })
  });
});
