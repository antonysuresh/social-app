import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const NoPost = () => {
  return (
    <div className="no-post-container">
      <h2>
          No post to display
      </h2>
      <p>Check back later for updates!</p>
      <div className="icon-container">
        <FiAlertCircle className="missing-icon" />
      </div>
    </div>
  );
};

export default NoPost;
