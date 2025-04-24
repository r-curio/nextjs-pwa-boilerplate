"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <form action={signInWithGoogle}>
      <Button
        type="submit"
        variant="outline"
        className="w-full"
      >
        Login with Google
      </Button>
    </form>
  );
};

export default SignInWithGoogleButton;
