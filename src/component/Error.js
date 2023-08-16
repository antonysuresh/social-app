import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="error-message">
      <svg className="error-icon" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="red"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9v2h2v-2h-2zm0 4v-4h2v4h-2z"
        />
      </svg>
      <p className="error-text">{message}</p>
    </div>
  );
};

export default Error;
