import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  test('should show eror message when username is empty', async () => {
    render(<SigninForm />);

    const UsernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(UsernameInput, { target: { value: '' } });

    const SubmitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.submit(SubmitButton);

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    /*  const ErrorMessage = screen.getByText(/Username is required/i);
      expect(ErrorMessage).toBeDefined();*/
  });


  test('should show error message when password is empty', async () => {
    render(<SigninForm />);

    const PasswordInput = screen.getByLabelText("Password");
    fireEvent.change(PasswordInput, { target: { value: '' } });

    const SubmitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.submit(SubmitButton);

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  })

  test('should show error message when username/password is incorrect', async () => {
    render(<SigninForm />);

    const onSubmit = jest.fn()

    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: {
        value: "testusername"
      }
    });

    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "password"
      }
    });

    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    expect(await screen.queryAllByRole("alert")).toHaveLength(2);
    expect(onSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /username/i })).toBeDefined();
  });

  test('should show error message when password is empty', async () => {});

  test('should show error message when username/password is incorrect', async () => {});


  test('onSubmit function is called when username and password is valid', async () => {
    const onSubmit = jest.fn();
    render(<SigninForm />);


    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: {
        value: "testusername"
      }
    });

    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "password"
      }
    });

    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(onSubmit).toBeCalledWith("testusername", "password");
    expect(screen.getByRole("textbox", { name: /username/i })).toBeDefined();
    expect(screen.getByLabelText("password")).toBeDefined();

    const SubmitButton = screen.getByRole('button', { name: /sign in/i });
  });
});
