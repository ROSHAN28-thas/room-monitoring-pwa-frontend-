import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch("http://192.168.0.167:3000/api/room-status")
      .then((response) => response.json())
      .then((result) => {
        setRoom(result.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  if (!room) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Room Monitoring</h1>
          <p>Live room and device status</p>
        </div>

        <div className="live">
          <span></span> Live
        </div>
      </header>

      {/* Summary */}
      <div className="summary">

        <div className="summary-card">
          <span>Total Rooms</span>
          <strong>1</strong>
        </div>

        <div className="summary-card">
          <span>Occupied</span>
          <strong>{room.isOccupied ? 1 : 0}</strong>
        </div>

        <div className="summary-card">
          <span>Vacant</span>
          <strong>{room.isOccupied ? 0 : 1}</strong>
        </div>

        <div className="summary-card">
          <span>Online</span>
          <strong>1</strong>
        </div>

      </div>

      {/* Main Content */}
      <div className="content">

        {/* Live Room */}
        <section className="panel">

          <div className="panel-title">
            <div>
              <small>LIVE ROOM STATUS</small>
              <h2>Room {room.roomNo}</h2>
            </div>

            <span className={room.isOccupied ? "occupied" : "vacant"}>
              ● {room.isOccupied ? "Occupied" : "Vacant"}
            </span>
          </div>

          <div className="room-info">

            <div>
              <label>Block</label>
              <b>{room.block}</b>
            </div>

            <div>
              <label>Floor</label>
              <b>{room.floorName}</b>
            </div>

            <div>
              <label>Device</label>
              <b>{room.deviceName}</b>
            </div>

            <div>
              <label>Connection</label>
              <b className="online">● Online</b>
            </div>

            <div>
              <label>Last Updated</label>
              <b>
                {new Date(room.lastUpdated).toLocaleString()}
              </b>
            </div>

          </div>

        </section>

        {/* Master Data */}
        <section className="panel master">

          <div className="panel-heading">
            <div>
              <small>MASTER DATA</small>
              <h2>Room & Device Details</h2>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Block</th>
                <th>Floor</th>
                <th>Room</th>
                <th>Device ID</th>
                <th>Device</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{room.block}</td>
                <td>{room.floorName}</td>
                <td>{room.roomNo}</td>
                <td>DEV001</td>
                <td>{room.deviceName}</td>
              </tr>
            </tbody>
          </table>

        </section>

      </div>

    </div>
  );
}

export default App;