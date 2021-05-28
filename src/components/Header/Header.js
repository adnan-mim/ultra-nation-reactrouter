import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const handleSearch = () => {
        const searchKeyword = document.getElementById('search-input').value;
        history.push(`/search/${searchKeyword}`)
    }

    return (
        <nav className="navbar header">
            <div className="container">
                <Link to="/home">
                    <h1 className="navbar-brand">All Countries Information</h1>
                </Link>
                <form className="d-flex">
                    <input id="search-input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={handleSearch} className="btn btn-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;