import React from 'react';

const url = 'https://kitwiissy.s3.amazonaws.com/flags';

const countryFlag = (value) => ({
    'es': `${url}/colombia.png`,
    'pt': `${url}/brazil.png`,
    'en': `${url}/united-states-of-america.png`,
})[value];

const Country = ({ country }) => (
    <>
        <img
            className="image-country"
            src={countryFlag(country)}
            alt="country"
        />
    </>
);

export default Country;