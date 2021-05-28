import React from 'react';
import { useHistory } from 'react-router';
import './Country.css';

const Country = (props) => {
    const { name, capital, area, population, region, flag } = props.country;

    const history = useHistory();
    const handleClick = countryName => {
        history.push(`/country/${countryName}`);
    }

    return (
        <div className="col my-3">
            <div className="card shadow">
                <div className="p-1" style={{height: "130px"}}>
                  <img src={flag} className="card-img-top h-100" alt="..." />
                </div>
                <div className="card-body p-2">
                    <h5 className="card-title text-center">{name}</h5>
                    <table className="table table-sm table-borderless">
                        <tbody>
                            <tr>
                                <td>Capital:</td>
                                <td>{capital}</td>
                            </tr>
                            <tr>
                                <td>Area:</td>
                                <td>{area}</td>
                            </tr>
                            <tr>
                                <td>Population:</td>
                                <td>{population}</td>
                            </tr>
                            <tr>
                                <td>Region:</td>
                                <td>{region}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button onClick={() => handleClick(name)} type="button" className="btn btn-danger">Get details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;