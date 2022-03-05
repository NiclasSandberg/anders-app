import React from 'react';
import Container from '../../../components/Container/Container';
import styles from './PublishedArticles.module.css';
import articlesText from './PublishedArticle.json';

const PublishedArticles = () => {
    return (
        <Container>
             {
                articlesText.map( text => {
                    return(
                        <div className={styles["articles"]}>
                        <ul>
                            <li>{text.line1}</li>
                            <li>{text.line2}</li>
                            <li>{text.line3}</li>
                            </ul>
                        </div>
                    )
                })
            }
           {/*
            <ul>
                <li>Minimalismen bor i Marfa, Texas</li>
                <li>Svenska Dagbladet, 2001</li>
                <li>The permanent art collection of Chinati Foundation</li>
            </ul>
            <ul>
                <li>När ideal och verklighet går samman</li>
                <li>Arkitektur, 2001 </li>
                <li>The architecture of Donald Judd</li>
            </ul>
            <ul>
                <li>New York, New York</li>
                <li>Arkitektur, 2007</li>
                <li>New construction in NYC</li>
        </ul>
            */}
        </Container>
    );
};

export default PublishedArticles;