const User = ({user}) => {
    const {id, name, username, email} = user;
  return (
    <tbody>
          {/* row 1 */}
          <tr className="hover">
            <th>{id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
          </tr>
        </tbody>
  );
};

export default User;
