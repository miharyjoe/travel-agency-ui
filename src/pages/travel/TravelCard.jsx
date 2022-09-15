import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import { useDataProvider } from '../../config/ApiContext';


const TravelCard = () => {
    const [travels, setTravels] = useState([]);

    const { getAllTravels, getTravelsById} = useDataProvider();

    useEffect(() => {
        getAllTravels().then(res => {setTravels(res)})
        console.log(travels);
    }, []);
    return (
        <>
        <Navbar/>
        <div className='container'>
            <h1>List of travels available </h1><hr/>
            <div className='row row-cols-3 g-3'>
                <div className='col'>
                {travels.map(travel=> (
                       <Card style={{ width: '18rem' }} key={travel.description+ Math.round(Math.random())}>
                       <Card.Img variant="top" src="https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                       <Card.Body >
                         <Card.Title key={travel.description+ Math.round(Math.random())}>{travel.description}</Card.Title>
                         <Card.Text>
                           <h4> Activiies: {travel.activities}            </h4>
                           <h4> date_departure: {travel.date_departure}   </h4>
                           <h4> place_departure: {travel.place_departure} </h4>
                           <h4> place_return: {travel.place_return}       </h4>
                           <h4> duration: {travel.duration}               </h4>
                           <h4> number of place: {travel.nbr_place}       </h4>
                           <h4> country: {travel.country}                 </h4>
                           <h4> tarif: {travel.tarif}                     </h4>
                         </Card.Text>
                         <Button variant="primary">Make reservation</Button>
                       </Card.Body>
                     </Card>
                ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default TravelCard;