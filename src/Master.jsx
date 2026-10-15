function Master() {
  const rooms = [
    {
      block: "Library Block",
      floor: "3rd Floor",
      roomNo: "301",
      deviceId: "DEV001",
      deviceName: "IR 1",
    },
    {
      block: "Library Block",
      floor: "3rd Floor",
      roomNo: "302",
      deviceId: "DEV002",
      deviceName: "IR 2",
    },
    {
      block: "Library Block",
      floor: "3rd Floor",
      roomNo: "303",
      deviceId: "DEV003",
      deviceName: "IR 3",
    },
  ];

  return (
    <main className="page-shell master-page">
      <section className="page-heading"><div><p className="eyebrow">Configuration registry</p><h1>Master data</h1><p className="page-description">Manage the rooms and devices available to your monitoring network.</p></div><div className="record-count"><strong>{rooms.length}</strong><span>Registered rooms</span></div></section>
      <section className="table-panel"><div className="section-heading table-heading"><div><p className="eyebrow">Room directory</p><h2>Rooms and devices</h2></div><span className="table-meta">All records</span></div><div className="table-scroll"><table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Floor</th>
            <th>Room No</th>
            <th>Device ID</th>
            <th>Device Name</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
            <tr key={room.roomNo}>
              <td>{room.block}</td>
              <td>{room.floor}</td>
              <td>{room.roomNo}</td>
              <td>{room.deviceId}</td>
              <td>{room.deviceName}</td>
            </tr>
          ))}
        </tbody>
      </table></div></section>
    </main>
  );
}

export default Master;