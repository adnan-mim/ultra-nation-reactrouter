import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div id="notFound">
            <div className="notFound">
                <div className="notFound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/home">Go To Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;