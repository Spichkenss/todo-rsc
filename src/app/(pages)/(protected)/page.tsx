import Link from "next/link";

import { Pages } from "@/app/config/pages";

import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

async function Home() {
  return (
    <main className="flex grow flex-col items-center gap-4 self-center">
      <Typography
        as="h1"
        weight="bold"
        className="text-center"
      >
        Don&apos;t forget anything with Todoshka
      </Typography>
      <Typography
        as="p"
        weight="medium"
        variant="translucent"
        className="text-center"
      >
        We will help you not to forget about your plans and track the completion of tasks
      </Typography>
      <Button>
        <Link href={Pages.signup}>
          Get started
        </Link>
      </Button>
    </main>
  );
}

export default Home;
