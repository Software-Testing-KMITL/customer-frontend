import { useAuth } from '@/hooks/useAuth';
import { HookTextField, useHookForm } from 'mui-react-hook-form-plus';
const defaultValues = { username: '', password: '' };

const SigninForm = () => {
  const { signin } = useAuth();
  const { registerState, handleSubmit } = useHookForm({
    defaultValues,
  });

  const onSubmit = (_data: typeof defaultValues) => {
    signin(_data);
  };

  return (
    <form
      className="flex flex-col gap-4 min-w-[24rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HookTextField
        {...registerState('username')}
        textFieldProps={{
          label: 'Username',
          fullWidth: true,
        }}
        rules={{
          required: {
            message: 'Username is required',
            value: true,
          },
        }}
      />

      <HookTextField
        {...registerState('password')}
        textFieldProps={{
          label: 'Password',
          type: 'password',
          fullWidth: true,
        }}
        rules={{
          required: {
            message: 'Passworo is required',
            value: true,
          },
        }}
      />

      <button
        type="submit"
        className="bg-black py-2.5 font-semibold text-white mt-4 rounded-full"
      >
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
