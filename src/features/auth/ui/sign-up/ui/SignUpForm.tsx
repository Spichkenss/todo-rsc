"use client";

import { Pages } from "@/app/config/pages";

import { SignUpControls } from "../../../model/controls";
import { AuthFormLayout } from "../../AuthFormLayout";

export const SignUpForm = () => (
  <AuthFormLayout
    title="Sign up"
    description="Enter email and password below to create account"
    controls={SignUpControls}
    redirect={{ title: "Already have an account?", url: Pages.signin }}
  />
);
