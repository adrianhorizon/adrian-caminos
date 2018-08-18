import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/SectionProfile.scss';

const SectionProfile = () =>  {
    const [t, i18n] = useTranslation()
    return(
        <>
            <div className="flexbox-code">
                <article className="main-container-code">
                    <h2 className="color-developer-title">{t('ME.DEVELOPER')}</h2>
                    <p className="color-developer-parrafe">
                    {t('ME.TITLE')}
                    <br/><br/>
                    {t('ME.SUBTITLE')}
                    <br/><br/>
                    {t('ME.DESCRIPTION')}
                    <br/><br/>
                    {t('ME.PARRAFE')}
                    </p>
                </article>
                <section className="main-container-figure">
                    <figure className="container-code-figures floating-cards">
                        <div className="card">
                            <ul className="tabs">
                                <li>Skills</li>
                                <li>Front end</li>
                                <li>Back end</li>
                                <li>Dev Ops</li>
                            </ul>
                            <div className="code-container">
                                <ul className="code" style={{ transform: "translateX(0%)" }}>
                                    <li className="active">
                                        <span className="token comment">// Skills</span><br/>
                                        <span className="token keyword" style={{color: "#45b2e8"}}>React native</span><br/>
                                        <span className="token function" style={{color: "#3ecf8e"}}>Angular</span>
                                    </li>
                                    <li>Front end</li>
                                    <li>Back end</li>
                                    <li>Dev Ops</li>
                                </ul>
                            </div>
                            <div className="shine"></div>
                        </div>
                    </figure>
                </section>
            </div>
        </>
    );
}

export default SectionProfile;