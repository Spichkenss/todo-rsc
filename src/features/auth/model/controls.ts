import { type HTMLInputTypeAttribute } from "react";

export interface AuthControl {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
}

export const SignInControls: AuthControl[] = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "email@example.com"
  },
  {
    id: "password",
    label: "Password",
    type: "password"
  }
];

export const SignUpControls: AuthControl[] = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "username"
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "email@example.com"
  },
  {
    id: "password",
    label: "Password",
    type: "password"
  }
];
