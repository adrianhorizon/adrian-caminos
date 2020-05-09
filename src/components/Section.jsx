import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/Section.scss';

const Section = () => {
    const [t] = useTranslation()

    return (
        <>
            <div className="container-section">
                <h1 className="title-section">{t('WORK.TITLE')}</h1>
                <section className="columns">
                    <div className="column">
                        <h2>Pokedex</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/pokedex.png" alt="pokedex angular adrian caminos" />
                    </div>

                    <div className="column">
                        <h2>Wheater aplication</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/wheater.png" alt="wheater angular adrian caminos" />
                    </div>

                    <div className="column">
                        <h2>Eccomerce simple project</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/market.png" alt="market angular adrian caminos" />
                    </div>

                </section>

                <section className="columns">
                    <div className="column">
                        <h2>blog medios sociales</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/lideres.png" alt="lideres adrian caminos" />
                    </div>

                    <div className="column">
                        <h2>Intranet para Rappi</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/lupe.png" alt="lupe adrian caminos" />
                    </div>

                    <div className="column">
                        <h2>soyRappi landing page</h2>
                        <img width="100%" src="https://kitwiissy.s3.amazonaws.com/works/soyRappi.png" alt="soyRappi adrian caminos" />
                    </div>

                </section>

            </div>
        </>
    );
}

export default Section;