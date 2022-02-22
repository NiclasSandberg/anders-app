import React from 'react'
import styles from './Studio.module.css';
import Anders from '../../assets/img/Studio/Anders_portrait_473kb.jpg';
import Birgitta from '../../assets/img/Studio/Birgitta-Portrait.jpg';
import Container from '../../components/Container/Container.jsx';
import Lovefors from '../../assets/img/Studio/Anders_Lovefors.jpg';

const Studio = () => {

    return (

        <>
            <Container>
                <div className={styles['text-wrapper-top']}>
                    <h1>Profile</h1>
                    <p>CWARC has a unique design and build profile, with Anders trained both as an Architect and Timber Framer. He has extensive experience working with classified, heritage and landmarked buildings and traditional craft as well as contemporary design.</p>
                    <p>Our passion is working and sculpting spaces with light and shadow; harnessing the sensual tactility of solid natural materials’ different textures and reflections. We pay keen attention to detail and value a close collaboration with clients and other skilled craftsmen, carpenters and cabinetmakers.</p>
                    <p>The studio’s projects are designed to bring an element of the unexpected, intending to make you feel at ease in the space.</p>
                    <p>Working primarily with private clients, we specialize in new homes, as well as the remodeling and extensions of villas, summerhouses, and apartments. </p>
                    <p>CWARC prides itself on a solid track record of successfully completed projects.</p>
                    <h1 style={{marginTop: "1.6rem"}}>Services</h1>
                    <p>To secure the best result with the completed projects, we also take on the role of Project and Construction Manager. We can procure consultants, contractors and all necessary building permits, and provide site management and supervision, ensuring that the project is finished on time and budget.</p>
                    <p>To ensure that the completed projects meet the high vision and ambition of the studio and our clients, we oversee construction with a close dialogue with the skilled carpenters with which we collaborate on a daily basis.</p>
                    <p>The studio also has a vast specialist network in the trade, such as skilled engineers, craftsmen, carpenters and cabinetmakers.</p>
                </div>
                 <div className={styles['img-container']}>
                    <img src={Anders} alt="" />
                </div>
                {/*
               <div className={styles['text-wrapper-top']}>
                    <h1>Anders Curman Wadman, Founder</h1>
                    <p>Registered Architect SAR/MSA, Timber Framer and Freelance Journalist</p>
                    <p>Anders holds a Master in Architecture from the Royal Institute of Technology in Stockholm from 2000. Part of his studies in later years were spent at ETH in Zürich.</p>
                    <p>Anders has worked with almost all typologies in all phases, from schematic design to construction documents, including luxury residential for private clients in New York City and for premium developers such as Oscar Properties in Stockholm.  </p>
                    <p>He held a leading position at Tengbom Architects, as well as the critically acclaimed international firm 3XN Architects, headquartered in Copenhagen with offices on three continents. He set up the Stockholm branch office of 3XN and served as Partner and Managing Director/Head of Office. Anders also had a crucial role in the realization of some of the firm’s first high-profile projects on the Swedish market, such as the award-winning Swedbank’s new headquarters and the mixed-use Stockholm Continental. Both projects have been widely published in the architectural press and as standalone books on the projects.  </p>
                    <p>Furthermore, he has worked with classified, heritage and landmarked buildings and is a former board member of the landmarked Curman’s Villor from 1880 in Lysekil on the west coast of Sweden.  </p>
                    <p>As a Timber Framer he has honed in on the design-build profile of timber framing and restoration of old log houses. </p>
                    <p>As a Freelance Journalist on architecture, art and photography he has been widely published in the Swedish daily press and architecture and photography magazines. </p>
                    <p style={{ fontSize: "1.06rem", marginBottom: "0px" }}>Memberships</p>
                    <p style={{ marginTop: "0.6rem" }}>
                        Sveriges Arkitekter  (The Swedish Architect Association))<br />
                        Byggnadsvård i Sörmland (Building Preservation in Sörmland)<br />
                        Byggnadsvårdsföretagen (The Building Preservation Enterprises)<br />
                        Svenska Byggnadsvårdsföreningen  (The Swedish Building Preservation Association)
                    </p>
                </div>
                <div className={styles['img-container']}>
                    <img src={Birgitta} style={{ marginTop: "1rem" }} alt="" />
                </div>
                <div className={styles['text-wrapper-top']}>
                    <h1>Birgitta Wadman, Board Member</h1>
                    <p>Registered Architect SAR/MSA, Artist and former Prop Designer at Norrlandsoperan.  </p>
                    <p>As a board member Birgitta serves as a Senior Design Advisor.  </p>
                    <p>She holds a Master in Architecture from the Royal Institute of Technology in Stockholm 2007.  </p>
                    <p>Birgitta has worked with almost all typologies in all phases, from schematic design to construction documents, incl. private residences in Madrid. At Tengbom Architects she was Design Architect for a rooftop addition for housing in Stockholm. At the same firm she was also Project Architect for Säby Gård’s sensitively designed new stable next to the landmarked existing one from the end of the 19th century. The new stable was nominated for the prestigious Redpaint Prize awarded by Falu Rödfärg.  </p>
                    <p>Along with working on various housing projects while at 1.11 Architects, Birgitta worked on a very successful conversion of an old harbour warehouse in Frihamnen in Stockholm, to a beer brewery with a spacious restaurant. Her artwork has been exhibited at Liljevalch’s Art Museum in Stockholm. As a Prop Designer at Norrlandsoperan for many years she was deeply involved in many opera productions and nationwide tours.</p>
                    <p style={{ fontSize: "1.06rem", marginBottom: "0px" }}>Memberships</p>
                    <p style={{ marginTop: "0.6rem" }}>Sveriges Arkitekter  (The Swedish Architect Association)) <br /> KKV / Konstnärernas Kollektivverkstad (The Artist’s Collective Workshop)</p>

                </div>
                <div className={styles['img-container']}>
                    <img src={Lovefors} style={{ marginTop: "1rem" }} alt="" />
                </div>
                <div className={styles['text-wrapper-top']}>
                    <h1>Anders Lövefors, Board Member</h1>
                    <p>Registered Architect SAR/MSA and Real Estate Developer</p>
                    <p>As a board member Anders serves as a Senior Advisor in Real Estate Development and Strategy.</p>
                    <p>He holds a Master in Architecture from the Royal Institute of Technology in Stockholm.</p>
                    <p>Anders current position is as a Project Developer at Hemsö, leading private owner of properties for public use in Sweden.</p>
                    <p>He is also a board member and CEO of the consultancy firm Anders Lövefors. Apart from commissions from real estate owners he worked for Stockholm County Council and with tenant representation. </p>
                    <p>Prior to that he was Head of Development for Strategic Real Estate Investments for the Stockholm County Council´s health care premises of two million sqm. </p>
                    <p>
                        In his early years he was working as a Project Architect at Reflex Architects and then as Real Estate Developer at Locum AB.
                    </p>
    
                </div>


*/}
            </Container>
        </>


    )
}

export default Studio
