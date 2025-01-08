import React, { useState } from "react";
import "./ReportsPage.css";

function ReportsPage() {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const reportData = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log("Submitted Report:", reportData);
    setShowForm(false); 
  };

  return (
    <div className="reports-page">
      <header className="reports-header">
        <h1>Reporting Community</h1>
      </header>
      <main className="reports-content">
        <section className="reports-list-section">
          <h2>Last Reports</h2>
          <div className="reports-list">
            <ul>
              <li>Report 1</li>
              <li>Report 2</li>
              <li>Report 3</li>
              <li>Report 4</li>
            </ul>
          </div>
        </section>
        <button
          className="make-report-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Make a Report"}
        </button>
        {showForm && (
          <form className="report-form" onSubmit={handleFormSubmit}>
            <label>
              Title:
              <input type="text" name="title" placeholder="Report Title" required />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                placeholder="Describe the issue here..."
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-report-button">
              Submit Report
            </button>
          </form>
        )}
      </main>
      <footer className="reports-footer">
        <p>Help?</p>
      </footer>
    </div>
  );
}

export default ReportsPage;
