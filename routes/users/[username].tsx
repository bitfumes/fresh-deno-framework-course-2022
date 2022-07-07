/** @jsx h */
import {h} from "preact"
import {PageProps, Handlers}  from "$fresh/server.ts"
import Layout from '../../components/layouts.tsx';

export const handler: Handlers = {
  async GET(_,ctx){
    const {username} = ctx.params;
    const res = await fetch(`https://api.github.com/users/${username}`);
    if(res.status === 404){
      return ctx.render(null);
    }

    const user = await res.json();
    return await ctx.render(user);
  }
}


export default function User({params,data}:PageProps) {
  return (
    <Layout>
      <a href={data.html_url} target="_blank">
      <p>{data.login}</p>
      <img src={data.avatar_url} alt={data.login} />
      </a>
    </Layout>
  )
}
