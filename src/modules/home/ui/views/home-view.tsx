"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { User } from "better-auth";
import { useRouter } from "next/navigation";

export const HomeView = ({ user }: { user: User }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {user.name}</p>
      <Button
        onClick={() =>
          signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
