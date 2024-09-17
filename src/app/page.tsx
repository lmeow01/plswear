import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { db } from "~/server/db";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await db.query.posts.findMany();



  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center text-black">
        hello
      </main>
    </HydrateClient>
  );
}
