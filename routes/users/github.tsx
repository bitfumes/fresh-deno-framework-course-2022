/** @jsx h */
import {h} from "preact"
import {useState} from "preact/hooks";
import {PageProps, Handlers}  from "$fresh/server.ts"
import Layout from '../../components/layouts.tsx';

export const handler: Handlers = {
  async GET(req,ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q')
   
    const res = await fetch(`https://api.github.com/users/${q}`);
    if(res.status === 404){
      return ctx.render(null);
    }

    const user = await res.json();
    return await ctx.render(user);
  }
}


export default function Github({data}:PageProps) {

  return (
    <Layout>
      <section>
        <form>
          <input type="text" name="q" placeholder="Search Github user by Username" />
          <button type="submit">Search</button>
        </form>
      </section>

      {
        data?.name && 
          <section>
          <a href={data.html_url} target="_blank">
            <p>{data.login}</p>
            <img src={data.avatar_url} alt={data.login} />
          </a>
        </section>
      }
    </Layout>
  )
}
