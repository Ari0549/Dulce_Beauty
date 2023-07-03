import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form';

const Services = () => {

    const [checkedAll, setCheckedAll] = useState(false);

    const [typeServiceF, settypeServiceF] = useState(false);

    const handletypeServiceFChange = (e) => {
        //settypeServiceF(!typeServiceF)
        settypeServiceF(e.target.value);
    };

    const [priceF, setPriceF] = useState(false);

    const handlepriceFChange = (e) => {
        //setPriceF(!priceF)
        setPriceF(e.target.value);
    };

    const [timeF, settimeF] = useState(false);

    const handletimeFChange = (e) => {
        //settimeF(!timeF)
        settimeF(e.target.value);
    };

    const data = 
    [
        { type: 'Body Treatment', price: '175$', time: '75 minutes'},
        { type: 'Body Treatment', price: '130$', time: '60 minutes'},
        { type: 'Body Treatment', price: '100$', time: '50 minutes'},
        { type: 'Facial Treatment', price: '175$', time: '60 minutes'},
        { type: 'Facial Treatment', price: '130$', time: '75 minutes'},
        { type: 'Facial Treatment', price: '100$', time: '40 minutes'},
        { type: 'Esthetic', price: '175$', time: '75 minutes'},
        { type: 'Esthetic', price: '130$', time: '75 minutes'},
        { type: 'Esthetic', price: '100$', time: '60 minutes'}
    ];

    const filteredData = data.filter((item) => {
        if (typeServiceF && item.type !== typeServiceF) {
          return false;
        }
        if (priceF && item.price !== parseInt(priceF)) {
          return false;
        }
        if (timeF && item.time !== parseInt(timeF)) {
          return false;
        }
        return true;
    });

    return (
        <div>
            <h1 className='titlePages'>Services</h1>
                <div style={{display: 'flex'}}>
                    <div>
                        <div>
                            <select value={typeServiceF} onChange={handletypeServiceFChange}>
                                <option value="">All types of services</option>
                                <option value="Body Treatment">Body Treatment</option>
                                <option value="Facial Treatment">Facial Treatment</option>
                                <option value="Esthetic">Esthetic</option>
                            </select>
                        </div>
                        <div>
                            <select value={priceF} onChange={handlepriceFChange}>
                                <option value="">All Prices</option>
                                <option value="175$">175$</option>
                                <option value="130$">130$</option>
                                <option value="100$">100$</option>
                            </select>
                        </div>
                        <div>
                            <select value={timeF} onChange={handletimeFChange}>
                                <option value="">All Times</option>
                                <option value="40 minutes">40 minutes</option>
                                <option value="50 minutes">50 minutes</option>
                                <option value="60 minutes">60 minutes</option>
                                <option value="75 minutes">75 minutes</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <h3>Filtered Results:</h3>
                        <ul>
                            {filteredData.map((item, index) => (
                            <ul key={index}>
                                <div>
                                    Type of Service: {item.type}
                                </div>
                                <div>
                                    Price: {item.price}
                                </div>
                                <div>
                                    Time: {item.time}
                                </div>
                            </ul>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
      );
    
}
export default Services;