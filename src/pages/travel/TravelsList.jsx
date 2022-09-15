import React, { useEffect, useState } from 'react'
import CardTravel from '../../components/CardTravel';
import Footer from '../../components/Footer'
import Navbar from '../../components/NavBar'
import { useDataProvider } from '../../config/ApiContext';

export const TravelsList = () => {
    const {instance} = useDataProvider();
    const [travels, setTravels] = useState([]);

    // const getTravels = async()=>{
    //     let pages=0;
    //     let pageSize=10;
    //     const res = await instance.get(`/travels?page=${pages}&page_size=${pageSize}`)
    //     setTravels(res.data)
    //     console.log(travels);
    // }
    // useEffect(() => {
    //     getTravels()
    // },[travels]);
  return (
    <>

    <div className='container'>
    {/* {travels.map(travel =>  
        {<Card title={travel.description}  description={travel.description}/>}
        
        )} */}
        <Navbar/>
        <CardTravel></CardTravel>
    </div>

    </>
  )
}
