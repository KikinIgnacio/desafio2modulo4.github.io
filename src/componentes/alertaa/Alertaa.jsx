import React from 'react';
import Alert from 'react-bootstrap/Alert';
import './alertaa.css'; 

const Alertaa = ({ texto, variant }) => {
  return (
    <div className='alert-container'>
        <div className="alert-message">
        <Alert variant={variant}>{texto}</Alert>
        </div>
    </div>
  );
}

export default Alertaa;
