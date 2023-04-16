import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "../components/Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
        <button>
          <Link href="/sign-in">sign-in</Link>
        </button>
      </SignedOut>
    </main>
  );
}

function Something() {
  return (
    <main>
      <h1>Holiday App</h1>
      <UserButton />
      <SignOutButton />
    </main>
  );
}
