const Dashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Digital Karyalay</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
          <ul className="mt-2 text-sm text-gray-700">
            <li>🗓️ Nagar Baithak – 7 July 2025</li>
            <li>🗓️ Vyavastha Samiti – 14 July 2025</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <ul className="mt-2 space-y-1 text-sm text-blue-600">
            <li><a href="/meetings/new" className="hover:underline">➕ Create New Meeting</a></li>
            <li><a href="/attendance/123/attendance" className="hover:underline">📋 Mark Attendance</a></li>
            <li><a href="/reports" className="hover:underline">🧾 Generate Reports</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
