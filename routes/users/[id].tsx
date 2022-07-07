/** @jsx h */
import {h} from "preact"
import {PageProps, Handlers}  from "$fresh/server.ts"
import Layout from '../../components/layouts.tsx';

export const handler: Handlers = {
  async GET(_,ctx){
    // fetch users from db
    const users = [
      {name:"Sarthak"},
      {name:"Anki"},
    ]
    return await ctx.render(users);
  }
}


export default function User({params,data}:PageProps) {

  return (
    <Layout>
      {
        data.map((user:any) => <p>{user.name}</p>)
      }
    </Layout>
  )
}
