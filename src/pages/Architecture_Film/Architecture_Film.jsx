import React, { Component } from 'react'
import styles from './Architecture_Film.module.css';
import Container from '../../components/Container/Container';

export default class Architecture_film extends Component {
    render() {
        return (
            <div>
                <video
                    autoPlay
                    loop="true"
                    style={{
                        position:'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: "100%",
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: ""
                    }}
                >
                
                <source src={require(`../../assets/video/Water_Tower.mp4`)} />
                </video>
            </div>
        )
    }
}
