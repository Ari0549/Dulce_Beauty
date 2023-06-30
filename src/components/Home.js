import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import homeImge from './homeimg.png';
import './styles.css';
import Nav from 'react-bootstrap/Nav';
import Book from "./Book";
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <figure className='position-relative'>
                        <img src={homeImge} alt='homeImg' className='img-fluid'/>
                        <figcaption>
                            <div className='text1'>
                                The Dulce Beauty Clinic
                            </div>
                            <div className='text2'>
                                Beauty Is Our Duty
                            </div>
                            <Nav.Link as={Link} to={"/book"}>
                                <Button bsStyle="primary" style={{
                                    marginTop: '10px',
                                    width: '140px',
                                    padding: '10px',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '20px',
                                    backgroundColor: '',
                                }}>Book now</Button>

                            </Nav.Link>
                        </figcaption>
                    </figure>
                </Container>
            </div>
        )
    }
}