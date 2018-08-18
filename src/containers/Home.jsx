import React from 'react';
import Section from '../components/Section';
import LayoutSeo from '../components/LayoutSeo';
import SectionProfile from '../components/SectionProfile';
import '../assets/styles/App.scss';

const Home = () => {
    return (
        <>
            <LayoutSeo
                title={`Hola soy Adrian Camilo Caminos actualmente soy desarrollador fullStack`}
                subTitle={`Te puedo ayudar con todo lo que necesites mentorias, conferencias, desarrollo y mucho mas`}
                link={`https://adriancaminos.me/`}
            ></LayoutSeo>
            <SectionProfile />
            <Section />
        </>
    );
}

export default Home;