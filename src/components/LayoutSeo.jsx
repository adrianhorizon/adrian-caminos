import React from 'react';
import { Helmet } from 'react-helmet';

const LayoutSeo = ({ link, title, subTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                {title && <title>Adrian camilo caminos - {title} </title>}
                {subTitle && <meta name="description" content={subTitle}></meta>}
                {link && <link rel="canonical" href={link} />}
            </Helmet>
        </>
    );
}

export default LayoutSeo;