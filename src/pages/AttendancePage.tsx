const AttendancePage = () => {
  const meetingOptions = ['Nagar Baithak – 7 July', 'Vyavastha – 14 July']
  const attendees = [
    { name: 'Pravin Karyakar', present: true },
    { name: 'Shrikant Pramukh', present: false },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Mark Attendance</h1>
      <select className="border p-2 rounded mb-4 w-full">
        {meetingOptions.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>

      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Present</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((a, i) => (
            <tr key={i}>
              <td className="p-2 border">{a.name}</td>
              <td className="p-2 border text-center">
                <input type="checkbox" defaultChecked={a.present} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AttendancePage;
