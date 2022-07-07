/** @jsx h */
import {h} from "preact"
import Layout from '../../components/layouts.tsx';
import SearchGithubUser from "../../islands/SearchGithubUser.tsx";
import {tw} from "@twind";

export default function Github() {

  return (
    <Layout>
      <div class={tw`flex justify-center`}>
        <div class={tw`m-auto`}>
          <SearchGithubUser />
        </div>
      </div>
    </Layout>
  )
}
