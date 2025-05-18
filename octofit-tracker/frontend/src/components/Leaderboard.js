import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://ideal-cod-6rwjpxw9gwq35wj5-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card shadow-sm mx-auto" style={{maxWidth: 700}}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Leaderboard</h2>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.user}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-primary mt-3" disabled>Challenge (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Leaderboard;
