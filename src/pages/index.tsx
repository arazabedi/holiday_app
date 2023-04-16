import { SignIn, SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {

	const SignInPage = () => (
		<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
		);

  return (
    <main>
      <SignedIn>
        {/* Mount the UserButton component */}
        <Navbar />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
				<p>Holiday App Signed Out Page</p>
				<button><Link href="/sign-in">sign-in</Link></button>
      </SignedOut>
    </main>
  );
}

function Navbar() {
  return (
    <main>
      <h1>Holiday App</h1>
      <UserButton />
			<SignOutButton />
    </main>
  );
}
