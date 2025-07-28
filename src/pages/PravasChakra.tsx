import { useEffect, useState } from "react";
import axios from "axios";
import '@/styles/PravasChakra.css'; // Import the new CSS file

// Interface for the data fetched for each user from Google Sheet
interface PravasUserEntry {
  post: string;
  firstHalf: string;
  secondHalf: string;
}

// Interface for the overall pravasData object
interface PravasData {
  [userName: string]: PravasUserEntry;
}

interface PravasChakraProps {
  // No props needed here as month/year are handled internally
}

const PravasChakra = ({ /* No props needed here */ }: PravasChakraProps) => {
  // Get current date to set initial month/year
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth()); // 0-indexed
  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());

  const [pravasData, setPravasData] = useState<PravasData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getDaysInMonth = (m: number, y: number) =>
    new Date(y, m + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear); // Use selectedMonth/Year

  const firstHalfDates = Array.from({ length: 15 }, (_, i) => i + 1);
  const secondHalfDates = Array.from({ length: daysInMonth - 15 }, (_, i) => i + 16);
  const allDateHalves = [firstHalfDates, secondHalfDates];

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const GSHEET_URL = import.meta.env.VITE_GSHEET_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const pravasRes = await axios.get(
          `${API_BASE_URL}/api/pravas-data/${selectedYear}/${selectedMonth}` // Use selectedMonth/Year
        );
        setPravasData(pravasRes.data);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          setError(`The data for ${new Date(selectedYear, selectedMonth).toLocaleString("default", {month: "long",year: "numeric",})} is not available.`);        
        } else {
          console.error("Error fetching data:", err);
          setError(`Failed to load data: ${err.message || "Unknown error"}. Please ensure backend is running and Google Sheet ID/credentials are correct.`);
        }
      } finally {
        setLoading(false);
      } 
    };

    fetchData();
  }, [selectedMonth, selectedYear, API_BASE_URL]); // Re-fetch when selectedMonth or selectedYear changes

  const userNames = Object.keys(pravasData);

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: new Date(0, i).toLocaleString('default', { month: 'long' }),
  }));

  // Generate years: current year, plus 2 previous and 2 future
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  return (
    <div className="pravas-container">
      {/* REMOVED: Background Shapes and Orbs divs */}

      <div className="pravas-card">
        <div className="header-controls">
          <h2 className="pravas-title">
            Pravas Status for{" "}
            {new Date(selectedYear, selectedMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <div className="date-selectors">
            <label htmlFor="month-select">Month:</label>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
            >
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            <label htmlFor="year-select">Year:</label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <a
            href={GSHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sheets-link"
          >
            Edit in Google Sheets
            {/* You can add an SVG icon here if desired */}
          </a>
        </div>

        {loading && <div className="message-box">Loading Pravas data...</div>}
        {error && <div className="message-box error">Error: {error}</div>}
        {!loading && !error && userNames.length === 0 && (
          <div className="message-box">
            No Pravas data found for{" "}
            {new Date(selectedYear, selectedMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}. Please check your Google Sheet headers, ID, sharing permissions, and backend connection.
          </div>
        )}

        {!loading && !error && userNames.length > 0 && (
          <div className="pravas-table-wrapper">
            <table className="pravas-table">
              <thead>
                <tr>
                  <th className="user-name-col">User Name</th>
                  <th className="post-col">Post</th>
                  {allDateHalves.map((_, idx) => (
                    <th className="half-col" key={idx}>
                      {idx === 0 ? "1–15" : `16–${daysInMonth}`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userNames.map((userName) => {
                  const userData = pravasData[userName];
                  if (!userData) return null;

                  return (
                    <tr key={userName}>
                    <td>{userName}</td>
                    <td>{userData.post}</td>
                      {allDateHalves.map((_, idx) => (
                        <td key={idx}>
                          <span className="pravas-value">
                            {idx === 0 ? userData.firstHalf : userData.secondHalf}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PravasChakra;