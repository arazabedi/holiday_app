import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <main className="flex h-screen items-center sign-in-background">
    <div className="mx-auto">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  </main>
);

export default SignInPage;
