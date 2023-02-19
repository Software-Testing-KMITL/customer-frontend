import { images } from '@/assets/icons';
import { GuestGuard } from '@/components/auth';
import { SigninForm } from '@/sections/signin';

const Signin = () => {
  return (
    <GuestGuard>
      <div className="w-screen h-screen grid grid-cols-2">
        <div className="w-full h-full bg-orange-200 flex justify-center items-center">
          <img src={images.LoginIcon} alt="" className="w-[80%]" />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="p-10 rounded-xl">
            <header className="mb-8">
              <h1 className="font-semibold text-2xl text-orange-600">Log in</h1>
              <p className="mt-2">Login with your username and password.</p>
            </header>

            <SigninForm />
          </div>
        </div>
      </div>
    </GuestGuard>
  );
};

export default Signin;
