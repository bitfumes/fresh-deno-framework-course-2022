/** @jsx h */
import {h} from "preact"
import { useState } from "preact/hooks";
import {tw} from "@twind";

export default function SearchGithubUser() {
  const [user, setUser] = useState();
  const [q, setQ] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch('/users/github', {
      method:"POST",
      body: JSON.stringify({q})
    });
    const data = await res.json();
    if(res.ok){
      setUser(data)
    }
  }

  function handleInput(e) {
    setQ(e.target.value)
  }

  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            class={tw`border rounded shadow-md px-4 py-2 w-72`}
            name="q"
            value={q}
            onChange={handleInput}
            placeholder="Search Github user by Username"
          />
          <button class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`} type="submit">Search</button>
        </form>
      </section>

      {user?.name && (
        <section class={tw`mt-10`}>
          <a href={user.html_url} target="_blank">
            <p class={tw`text-2xl text-center`}>Username: {user.login}</p>
            <img class={tw`border rounded shadow-md w-32 h-32`} src={user.avatar_url} alt={user.login} />
          </a>
        </section>
      )}
    </div>
  );
}
