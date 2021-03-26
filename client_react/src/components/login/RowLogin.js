import React, {useState} from 'react';

import { Image, Row} from 'react-bootstrap';

export default (props) => {

    return (


            <Row className="row py-5 mt-4 align-items-center">
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <Image src={require('../../assets/demo.svg')} fluid 
                    alt="" 
                    className="img-fluid mb-3 d-none d-md-block"
                />
                <h1>4BR: Encurtar liks e gerar QR Code</h1>
                <p className="font-italic text-muted mb-0">
                    ...
                </p>
            </div>
            {/* Registeration Form */}
            <div className="col-md-7 col-lg-6 ml-auto">
                {props.children}
            </div>
        </Row>
    )
}        