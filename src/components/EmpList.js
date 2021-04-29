import { useState, useEffect } from 'react';
import Employee from './Employee';

function EmpList({ empData }) {
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
  );
}

export default EmpList;
