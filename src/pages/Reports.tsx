const Reports = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Reports</h1>
      <p className="mb-2">Choose report type:</p>
      <div className="space-y-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">🧾 Attendance Summary (PDF)</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">📋 Shakha Pat</button>
      </div>
    </div>
  )
}

export default Reports
