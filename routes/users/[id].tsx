/** @jsx h */
import {h} from "preact"
import {PageProps}  from "$fresh/server.ts"

export default function User({params}:PageProps) {
  return (
    <div>{params.id}</div>
  )
}
