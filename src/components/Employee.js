function Employee({ id, name, avatar, email, position }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{position}</td>
      </tr>
    </>
  );
}
export default Employee;
