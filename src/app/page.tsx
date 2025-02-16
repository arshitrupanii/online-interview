import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {Button} from "../components/ui/button";

export default function Home() {
  return (
    <div>
      Home
      <SignedOut>
        <Button>
          <SignInButton />
        </Button>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
  );
}
