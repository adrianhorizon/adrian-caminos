import React from 'react';

export const countryFlag = (value) => {
    const url = 'https://kitwiissy.s3.amazonaws.com/flags';

    switch (value) {
        case 'es':
            return `${url}/colombia.png`;

        case 'pt':
            return `${url}/brazil.png`;

        case 'en':
            return `${url}/united-states-of-america.png`;

        default:
            return `${url}/colombia.png`;
    }
};

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