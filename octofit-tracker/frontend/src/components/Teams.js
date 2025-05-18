import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ideal-cod-6rwjpxw9gwq35wj5-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow-sm mx-auto" style={{maxWidth: 900}}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Teams</h2>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{Array.isArray(team.members) ? team.members.map((m, i) => m.username || m).join(', ') : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3" disabled>Create Team (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Teams;
