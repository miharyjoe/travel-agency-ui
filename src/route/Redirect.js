import React from 'react';
import { Navigate } from 'react-router-dom';

const Redirect = ({to}) => {
    return (<Navigate to={to}/>    )
}

export default Redirect