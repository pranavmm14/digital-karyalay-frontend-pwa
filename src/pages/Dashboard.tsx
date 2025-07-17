// src/pages/Dashboard.tsx
import { Link } from "react-router-dom";

const Dashboard = () => {
  console.log("Dashboard component is rendering"); // Debug log

  return (
    <div className="p-6 space-y-4 pt-20">
      {" "}
      {/* Added pt-20 for fixed navbar */}
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
            <li>
              <Link to="/meetings/new" className="hover:underline">
                ➕ Create New Meeting
              </Link>
            </li>
            <li>
              <Link to="/meetings/123/attendance" className="hover:underline">
                📋 Mark Attendance
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:underline">
                🧾 Generate Reports
              </Link>
            </li>
            <li>
              <Link to="/PravasChakra" className="hover:underline">
                🌐 Pravas Chakra
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
