
import RegisterForm from '@/app/ui/register-form';
import Header from '@/app/ui/header';


export default function RegisterPage() {
  return (
    <>
    <Header />
    <main className="mx-auto flex h-full min-h-screen justify-center pt-14">
      <div className="relative mx-auto mt-8 flex w-full max-w-[460px] flex-col space-y-2.5 p-4">
        <RegisterForm />
      </div>
    </main>
    </>
  );
}
