import Employee from './Employee';
import Pagination from './Pagination';

function EmpList({ empData, postPerPage, paginate, totalPosts }) {
  const empList = empData.map((emp) => {
    const { id, name, avatar, email, position } = emp;
    return (
      <Employee
        id={id}
        name={name}
        avatar={avatar}
        email={email}
        position={position}
        key={id}
      />
    );
  });
  return (
    <div className="container">
      <div className="emp">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
          <tbody>{empList}</tbody>
        </table>
      </div>

      <Pagination
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </div>
  );
}

export default EmpList;
