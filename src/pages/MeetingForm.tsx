import { useState } from 'react'

const MeetingForm = () => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    conductor: '',
    agenda: ''
  })

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create/Edit Meeting</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Meeting Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Conductor"
          value={form.conductor}
          onChange={(e) => setForm({ ...form, conductor: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Agenda"
          value={form.agenda}
          onChange={(e) => setForm({ ...form, agenda: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Meeting
        </button>
      </form>
    </div>
  )
}

export default MeetingForm
