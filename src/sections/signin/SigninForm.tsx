import { HookTextField, useHookForm } from 'mui-react-hook-form-plus';
const defaultValues = { person: { username: '', password: '' } };

const SigninForm = () => {
  const { registerState, handleSubmit } = useHookForm({
    defaultValues,
  });

  const onSubmit = (_data: typeof defaultValues) => {
    console.log(_data);
  };

  return (
    <form
      className="flex flex-col gap-4 min-w-[24rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HookTextField
        {...registerState('person.username')}
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
        {...registerState('person.password')}
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
