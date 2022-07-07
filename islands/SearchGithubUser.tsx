/** @jsx h */
import {h} from "preact"
import { useState } from "preact/hooks";

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
            name="q"
            value={q}
            onChange={handleInput}
            placeholder="Search Github user by Username"
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {user?.name && (
        <section>
          <a href={user.html_url} target="_blank">
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} />
          </a>
        </section>
      )}
    </div>
  );
}
