import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/Section.scss';

const Section = () => {
    const [t] = useTranslation()

    return (
        <>
            <div className="container-section">
                <h1 className="title-section">{t('WORK.TITLE')}</h1>
                <div className="columns">
                    <div className="box column">
                        <div className="img-box-1">
                        </div>
                        <div className="text">Pokedex</div>
                    </div>

                    <div className="box column">
                        <div className="img-box-2">
                        </div>
                        <div className="text">Citys Wheater</div>
                    </div>

                    <div className="box column">
                        <div className="img-box-3">
                        </div>
                        <div className="text">Market Place</div>
                    </div>
                </div>

                <div className="columns">
                    <div className="box column">
                        <div className="img-box-4">
                        </div>
                        <div className="text">Lideres en la lucha</div>
                    </div>

                    <div className="box column">
                        <div className="img-box-5">
                        </div>
                        <div className="text">Lupe</div>
                    </div>

                    <div className="box column">
                        <div className="img-box-6">
                        </div>
                        <div className="text">SoyRappi</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;