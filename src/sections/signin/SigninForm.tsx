import { useAuth } from '@/hooks/useAuth';
import { HookTextField, useHookForm } from 'mui-react-hook-form-plus';
const defaultValues = { username: '', password: '' };

const SigninForm = () => {
  const { signin } = useAuth();
  const {
    registerState,
    handleSubmit,
    formState: { errors },
  } = useHookForm({
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
          helperText: '',
        }}
        rules={{
          required: {
            message: 'Username is required',
            value: true,
          },
        }}
      />
      {errors.username && (
        <span role="alert" className="text-red-500">
          {errors.username.message}
        </span>
      )}

      <HookTextField
        {...registerState('password')}
        textFieldProps={{
          label: 'Password',
          type: 'password',
          fullWidth: true,
          helperText: '',
        }}
        rules={{
          required: {
            message: 'Password is required',
            value: true,
          },
        }}
      />
      {errors.password && (
        <span role="alert" className="text-red-500">
          {errors.password.message}
        </span>
      )}

      <button
        type="submit"
        className="bg-black py-2.5 font-semibold text-white mt-4 rounded-full active:bg-black/80"
      >
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
