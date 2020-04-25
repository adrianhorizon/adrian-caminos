import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/SectionProfile.scss';
import { TAB_ITEMS } from '../utils/constant';

const SectionProfile = () => {
    const [t] = useTranslation();
    const [active, setActive] = useState(0);

    useEffect(() => {
        const next = (active + 1) % TAB_ITEMS.length;
        const id = setTimeout(() => setActive(next), 5000);
        return () => clearTimeout(id);
    }, [active]);

    return (
        <>
            <div className="flexbox-code">
                <article className="main-container-code">
                    <h2 className="color-developer-title">{t('ME.DEVELOPER')}</h2>
                    <div className="color-developer-parrafe">
                        <p>{t('ME.TITLE')}</p>
                        <p>{t('ME.SUBTITLE')}</p>
                        <p>{t('ME.DESCRIPTION')}</p>
                        <p>{t('ME.PARRAFE')}</p>
                    </div>
                </article>
                <section className="main-container-figure">
                    <figure className="container-code-figures floating-cards">
                        <div className="card">
                            <ul className="tabs">
                                {TAB_ITEMS.map(({ id, title }) =>
                                    <TabItemComponent
                                        styleClass={'container-list-tabs'}
                                        key={id}
                                        title={title}
                                        onItemClicked={() => setActive(id)}
                                        isActive={active === id}
                                    />
                                )}
                            </ul>
                            <div className="code-container">
                                <ul className="code" style={{ transform: "translateX(0%)" }}>
                                    <li className="container-list-tabs active">
                                        {TAB_ITEMS.map(({ id, content }) => {
                                            return active === id ? <TabContentComponent key={id} value={content} /> : ''
                                        })}
                                    </li>
                                </ul>
                            </div>
                            <div className="shine"></div>
                        </div>
                    </figure>
                </section>
            </div>
        </>
    );
};

const TabItemComponent = ({
    styleClass = '',
    title = '',
    onItemClicked = () => console.error('You passed no action to the component'),
    isActive = false,
}) => {
    return (
        <li className={`${styleClass} ${isActive ? `${styleClass} active` : ''}`} onClick={onItemClicked}>{title}</li>
    );
};

const TabContentComponent = ({ value, }) => {
    return (
        <>
            {Object.keys(value).map(key =>
                <div key={key}>
                    <p className={`token keyword ${key % 2 == 0 ? 'keywordOdd' : 'keywordAdd'}`}>- {value[key]}</p>
                </div>
            )}
        </>
    );
};

export default SectionProfile;