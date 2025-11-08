import { useParams } from "react-router";

export default function User() {
  //   const params = useParams(); {id: 21}
  //   console.log("😎 params", params);
  //   console.log("😎 params.id", params.id);
  // IN SHORT, USE DESTRUCT
  const { id } = useParams();

  return (
    <div>
      <h2>User {id} Page</h2>
    </div>
  );
}
