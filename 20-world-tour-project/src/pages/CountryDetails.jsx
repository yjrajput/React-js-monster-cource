import React, { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryDetails } from '../api/postApi';
import Loader from '../components/Loader';

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const handleOnback = () =>{
    navigate(-1)
  }
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryDetails(params.id);

        if (res.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <Loader />;

  // Safe fallback values
  const nativeName = country.name?.nativeName
    ? Object.values(country.name.nativeName)[0]?.official
    : "No native name";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages";

  const currency = country.currencies
    ? Object.values(country.currencies)[0]?.name
    : "No currency";

  return (
    <div className='country-details-section'>
      <div className='container'>
        <h1 style={{padding: '0 2rem'}}>Country Details</h1>
        <div className='country-details-card'>

          {/* FLAG */}
          <div className='country-details-image'>
            <img
              src={country.flags?.png}
              alt={country.flags?.alt || "flag"}
            />
          </div>

          {/* INFO */}
          <div className='country-details-content'>
            <h3>{country.name?.common}</h3>

            <p>Native Name: <span>{nativeName}</span></p>
            <p>Population: <span>{country.population?.toLocaleString()}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Sub Region: <span>{country.subregion}</span></p>
            <p>Capital: <span>{country.capital?.join(", ")}</span></p>
            <p>Languages: <span>{languages}</span></p>
            <p>Currencies: <span>{currency}</span></p>
          </div>

        </div>

        <div className='go-back'>
          <button onClick={handleOnback}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
