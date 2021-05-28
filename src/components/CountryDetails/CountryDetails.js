import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
    const [country, setCountry] = useState({});

    const { countryName } = useParams();
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName]);

    const { flag, name, capital, nativeName, area, population, region, subregion, demonym, alpha2Code, alpha3Code, callingCodes, numericCode } = country;

    return (
        <>
            <div className="card my-4 shadow" style={{ maxWidth: "540px", margin: "auto" }}>
                <img src={flag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">{name}</h3>
                    <table className="table table-sm table-borderless">
                        <tbody>
                            <tr>
                                <td>Native Name:</td>
                                <td>{nativeName}</td>
                            </tr>
                            <tr>
                                <td>Capital:</td>
                                <td>{capital || 'hello'}</td>
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
                            <tr>
                                <td>Sub Region:</td>
                                <td>{subregion}</td>
                            </tr>
                            <tr>
                                <td>Demonym:</td>
                                <td>{demonym}</td>
                            </tr>
                            <tr>
                                <td>Alpha-2 & Alpha-3 Code:</td>
                                <td>{alpha2Code} & {alpha3Code}</td>
                            </tr>
                            <tr>
                                <td>Country Code:</td>
                                <td>{callingCodes}</td>
                            </tr>
                            <tr>
                                <td>Numeric Code:</td>
                                <td>{numericCode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center">
                <Link to="/home">
                    <button type="button" className="btn btn-danger px-4 py-2">Back to Home</button>
                </Link>
            </div>
        </>
    );
};

export default CountryDetails;