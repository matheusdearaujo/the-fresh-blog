import { Head } from "$fresh/runtime.ts";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import Header from "@/components/Header.tsx";
import Card from "@/components/Card.tsx";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Page({ data }: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>The Fresh Blog</title>
      </Head>

      <Header />
      <main class="container mx-auto bg-white w-full py-6 px-8 my-10">
        <h1 class="text-center text-2xl text-gray-500 font-bold">
          Welcome to The Fresh Blog
        </h1>
        <h2 class="text-center">
          You currently {data.isAllowed ? "are" : "are not"} logged in.
        </h2>
      </main>
      <Card />
    </>
  );
}
