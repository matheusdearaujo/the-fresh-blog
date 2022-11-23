import { PageProps, Handlers } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${name}`);

    if (resp.status === 404) {
      return ctx.render(null);
    }

    const user: User = await resp.json();

    return ctx.render(user);
  },
};

export default function Page({
  data,
  params: { name },
}: PageProps<User | null>) {
  return (
    <>
      {data ? (
        <div>
          <img src={data.avatar_url} width={64} height={64} />
          <h1>{data.name}</h1>
          <p>{data.login}</p>
        </div>
      ) : (
        <h1>User {name} not found</h1>
      )}
    </>
  );
}
