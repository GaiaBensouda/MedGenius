import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const userName = "John Doe"; //
  const healthMetrics = [
    { metric: "Weight", value: "70 kg" },
    { metric: "Blood Pressure", value: "120/80" },
    { metric: "Heart Rate", value: "72 bpm" },
  ]; // Placeholder for health metrics
  const appointments = [
    { date: "2024-07-20", time: "10:00 AM", doctor: "Dr. Smith" },
    { date: "2024-08-15", time: "02:00 PM", doctor: "Dr. Johnson" },
  ]; // Placeholder for upcoming appointments
  const healthTips = [
    "Drink at least 8 glasses of water daily.",
    "Exercise for 30 minutes at least 5 times a week.",
    "Get at least 7-8 hours of sleep every night.",
  ]; // Placeholder for health tips

  return (
    <div className="dashboard">
      <h2>Welcome, {userName}</h2>
      <div className="dashboard-section">
        <h3>Health Overview</h3>
        <ul>
          {healthMetrics.map((metric, index) => (
            <li key={index}>{metric.metric}: {metric.value}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h3>Upcoming Appointments</h3>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>{appointment.date} at {appointment.time} with {appointment.doctor}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h3>Personalized Health Tips</h3>
        <ul>
          {healthTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
