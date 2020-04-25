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
                        <h2>1st Content Area</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?</p>
                    </div>

                    <div className="column">
                        <h2>2nd Content Area</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum.</p>
                    </div>

                    <div className="column">
                        <h2>3rd Content Area</h2>
                        <p>Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto cum praesentium voluptatibus recusandae?</p>
                    </div>

                </section>

                <section className="columns">
                    <div className="column">
                        <h2>1st Content Area</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?</p>
                    </div>

                    <div className="column">
                        <h2>2nd Content Area</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum.</p>
                    </div>

                    <div className="column">
                        <h2>3rd Content Area</h2>
                        <p>Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto cum praesentium voluptatibus recusandae?</p>
                    </div>

                </section>

            </div>
        </>
    );
}

export default Section;