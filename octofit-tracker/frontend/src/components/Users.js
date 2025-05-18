import React, { useEffect, useState } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://ideal-cod-6rwjpxw9gwq35wj5-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow-sm mx-auto" style={{maxWidth: 700}}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Users</h2>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-3" disabled>Add User (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Users;
