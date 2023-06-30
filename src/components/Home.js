import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import homeImge from './homeimg.png';
import './styles.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <figure className='position-relative'>
                        <img src={homeImge} alt='homeImg' className='img-fluid'/>
                        <figcaption>
                            The Dulce beauty clinic
                        </figcaption>
                    </figure>
                </Container>
            </div>
        )
    }
}