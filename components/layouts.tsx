/** @jsx h */
import { h } from "preact";

export default function layouts({children}:any) {
  return (
    <div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users/2">User2</a>
        </nav>
        {children}
    </div>
  )
}
