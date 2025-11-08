// Fetching data in short
// const res = await fetch("https://dummyjson.com/users");
// const data = await res.json();

import { Link } from "react-router";

// Fetching data with logic
const api = "https://dummyjson.com/users";
console.log("😂 api", api);

let users = [];

const res = await fetch(api);
console.log("😂 res", res);

if (res.status === 200) {
  console.log("😂 success");

  const data = await res.json();
  console.log("😂 data", data);

  //   const users = data.users;
  //   In Short, use object distruct
  //   const { users } = data;

  users = data.users;
  console.log("😂 users", users);
} else {
  console.log("😂 not success");
}

export default function Users() {
  return (
    <div>
      <h2>All Users</h2>
      <div className="flex flex-wrap gap-4 justify-between p-4">
        {users.map((user) => (
          <div key={user.id} className="flex gap-2 p-2 rounded-md shadow-md border w-full md:w-3/12">
            <div className="">
                <img src={user.image} alt="" />
            </div>
            <div className="">
                <h3 className="text-xl font-black">{user.firstName} {user.lastName}</h3>
                <Link to={`${user.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
