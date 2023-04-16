import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <main className="flex h-screen items-center sign-up-background">
    <div className="mx-auto">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  </main>
);

export default SignUpPage;
