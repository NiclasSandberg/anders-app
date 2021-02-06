import React from 'react'
import styles from './Studio.module.css';
import Anders from '../../assets/img/Studio/Anders_portrait_473kb.jpg';
import Birgitta from '../../assets/img/Studio/Birgitta-Portrait.jpg';
import Container from '../../components/Container/Container.jsx';

const Studio = () => {

    return (

        <>
            <Container>
            <div className={styles['img-container']}>
                <img src={Anders} style={{ width: '100%' }} alt="" />
                <img src={Birgitta} style={{ width: '100%' }} alt="" />
            </div>

            <div className={styles['text-wrapper']}>
                <div className={styles['col-1']}>
                    <p className={styles['sub_headings']}>Profile</p>
                    <p>
                        Curman Wadman Architecture and Craft is a Stockholm based architecture and craft studio led by Anders Curman Wadman and Birgitta Wadman with a combined 35 years of experience as architects.
                        They both share a passion working with space sculpted by light and shadow, the sensual tactility of solid natural materials’ different textures and reflections and last but not the least an attention to details and to value a close collaboration with skilled craftsmen, carpenters and cabinetmakers.
                        The studio is primarily working for private clients with new houses, remodeling and extensions of villas, summerhouses and apartments.
                    </p>
                    <p className={styles['sub_headings']}>Services</p>
                    <p>
                    To secure the best result they also have the role as Project and Production Managers, offering their clients the services of procurement of consultants and contractors, all necessary building permits and site management and supervision. They have a vast network of skilled engineers and all types of craftsmen and cabinetmakers.
                    </p>

                    <p className={styles['sub_headings']}>Experience</p>
                    <p>
                        Anders is a Registered Architect SAR/MSA, Timberman and Freelance Journalist with a Master in Architecture from the Royal Institute of Technology in Stockholm from 2000 with part of his later years’ studies at ETH in Zürich.
                        Birgitta is a Registered Architect SAR/MSA, Artist and former Propmaker at Norrlandsoperan with a Master in Architecture from the Royal Institute of Technology in Stockholm 2007.
                        Anders has worked with almost all typologies in all phases, from schematic design to construction documents, incl. high-end housing in New York City for private clients and developers like Oscar Properties in Stockholm.
                        </p>
                </div>
                <div className={styles['col-2']}>
                    
                    <p>
                        He has had leading positions at Tengbom Architects as well as the critical acclaimed international firm 3XN Architects with HQ in Copenhagen. He set up the Stockholm branch office of the latter one as Partner and Managing Director/Head of Office. He also had a crucial role in the realization of some of the firm’s first high profile projects on the Swedish market, such as Swedbank new HQ and the mixed-use Stockholm Continental. He has worked with classified and landmarked buildings and is a board member of the landmarked Curman’s Villor. As a Freelance Journalist on architecture, art and photography he has been widely published in the Swedish daily press and architecture and photography magazines. Among other ongoing projects he’s currently designing four timber frame structures and building a timber house with hand tools and dovetail joints to be used as a wood burning sauna.
                    </p>
                    <p>
                        Birgitta has also worked with almost all typologies in all phases, from schematic design to construction documents, incl. private residences in Madrid. At Tengbom Architects she was Design Architect for a rooftop addition for housing in Stockholm. At the same firm she was also Project Architect for Säby Gård’s sensitively designed new stable next to the landmarked existing one. The new stable was nominated for the prestigious Redpaint award given by Falu Rödfärg. At 1.11 Architects she has among various housing projects worked with a very successful conversion of an old harbour warehouse in Frihamnen in Stockholm to a beer brewery with a spacious restaurant. Her artwork has been exhibited at Liljevalch’s Art Museum in Stockholm. As a propmaker for many years she was deeply involved in many opera productions and nationwide tours.
                    </p>

                </div>
            </div>
            </Container>
        </>


    )
}

export default Studio
