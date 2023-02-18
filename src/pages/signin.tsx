import { HookTextField, useHookForm } from 'mui-react-hook-form-plus';

const defaultValues = { person: { username: '', password: '' } };

const Signin = () => {
  const { registerState, handleSubmit } = useHookForm({
    defaultValues,
  });

  const onSubmit = (_data: typeof defaultValues) => {
    console.log(_data);
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="w-full h-full bg-blue-300"></div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="p-10 rounded-xl">
          <header className="mb-8">
            <h1 className="font-semibold text-2xl">Log in</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur Lorem,
            </p>
          </header>

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
        </div>
      </div>
    </div>
  );
};

export default Signin;
