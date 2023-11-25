"use client";

import { Pages } from "@/app/config/pages";

import { SignInControls } from "../../../model/controls";
import { AuthFormLayout } from "../../AuthFormLayout";

export const SignInForm = () => (
  <AuthFormLayout
    title="Sign in"
    description="Enter email and password below to sign in your account"
    controls={SignInControls}
    redirect={{ title: "Dont have an account yet?", url: Pages.signup }}
  />
);
