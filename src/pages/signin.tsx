import { SigninForm } from '@/sections/signin';

const Signin = () => {
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

          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default Signin;
