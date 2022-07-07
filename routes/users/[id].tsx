/** @jsx h */
import {h} from "preact"
import {PageProps}  from "$fresh/server.ts"
import Layout from '../../components/layouts.tsx';

export default function User({params}:PageProps) {
  return (
    <Layout>
    <div>{params.id}</div>
    </Layout>
  )
}
