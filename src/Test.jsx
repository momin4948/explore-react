import { useEffect, useState } from "react";

export default function Test() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <p>User length : {users.length}</p>
    </div>
  );
}
