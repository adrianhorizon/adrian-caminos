import React from 'react';
import LayoutSeo from '../components/LayoutSeo';

const NotFound = () => (
    <>
        <LayoutSeo
          title={`No se encotro lo que buscabas`}
          subTitle={`puedes intentar en www.github.com/adrianhorizon`}
          link={`https://adriancaminos.me/`}
        ></LayoutSeo>
        <h1>No Encontrado</h1>
        <h2>Regresa al Home</h2>
    </>
);

export default NotFound;