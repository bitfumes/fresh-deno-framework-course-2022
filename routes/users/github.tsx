/** @jsx h */
import {h} from "preact"
import Layout from '../../components/layouts.tsx';
import SearchGithubUser from "../../islands/SearchGithubUser.tsx";

export default function Github() {

  return (
    <Layout>
      <SearchGithubUser />
    </Layout>
  )
}
