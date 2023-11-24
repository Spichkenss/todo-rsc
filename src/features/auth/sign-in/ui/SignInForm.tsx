"use client";

import { Button } from "@/shared/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/shared/ui/card";
import { Icons } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export const SignInForm = () => (
  <Card className="min-w-full md:min-w-[500px]">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">Sign in</CardTitle>
      <CardDescription>
        Enter your email below to sign in your account
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <Button variant="outline">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
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
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Sign in</Button>
    </CardFooter>
  </Card>
);
