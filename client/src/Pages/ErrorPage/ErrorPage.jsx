import React from 'react';
import './ErrorPageStyles.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">I apologize for the inconvenience. Please try again later.</p>
        <Link to="/" className="error-link">
            Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;