import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://ideal-cod-6rwjpxw9gwq35wj5-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow-sm mx-auto" style={{maxWidth: 900}}>
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Activities</h2>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Activity Type</th>
              <th>Duration</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
                <td>{activity.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" disabled>Add Activity (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Activities;
