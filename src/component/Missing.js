import React from 'react'
import { FiAlertCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="Missing">
      <div className="missing-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <div className="icon-container">
          <FiAlertCircle className="missing-icon" />
        </div>
        <Link to='/'>go back to home</Link>
      </div>
    </main>
  );
}

export default Missing