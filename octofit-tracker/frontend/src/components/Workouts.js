import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://ideal-cod-6rwjpxw9gwq35wj5-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow-sm mx-auto" style={{maxWidth: 700}}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Workouts</h2>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning mt-3" disabled>Add Workout (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Workouts;
