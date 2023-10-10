import { useLoaderData } from "react-router-dom";
import User from "../../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <h3 className="text-center font-bold text-4xl my-10 text-red-400">
        Total Of User : {users.length}{" "}
      </h3>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </table>
      </div>
    </>
  );
};

export default Users;
