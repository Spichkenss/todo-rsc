"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "@/shared/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/shared/ui/card";
import { Icons } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { type AuthControl } from "../model/controls";

interface AuthFormLayoutProps {
    title: string;
    description: string;
    controls: AuthControl[];
    redirect: {
        url: string;
        title: string;
    }
}

export const AuthFormLayout = ({
  title, description, controls, redirect
}: AuthFormLayoutProps) => {
  const handleSignIn = async (provider: string) => {
    await signIn(provider, { redirect: false });
  };

  return (
    <Card className="w-full md:w-[500px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {controls.map(({
          type, id, placeholder, label
        }) => (
          <div className="grid gap-2" key={id}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} />
          </div>
        ))}
        <Button className="w-full">{title}</Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Button variant="outline" onClick={() => handleSignIn("github")}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" onClick={() => handleSignIn("google")}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={redirect.url}>
          {redirect.title}
        </Link>
      </CardFooter>
    </Card>
  );
};
