import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('')
  const [travels, setTravels] = useState([]);
  const [notificationStatus, setNotificationStatus] = useState({type:'', message:'', isActive:false})
  const [searchMotif, setSearchMotif] = useState();
  const [searchTravels, setSearchTravels] = useState();
  const instance = axios.create({
    baseURL: 'http://localhost:8080'
  })
  const getTravels = async(pages, pageSize)=>{
    const res = await instance.get(`/travels?page=${pages}&page_size=${pageSize}`)
    setTravels(res.data)
}

  const DisabelNotif = () => {
    setNotificationStatus({type:'', message:'', isActive:false})
  }

  useEffect(()=>{
    const timer = setTimeout(() => {
      DisabelNotif()
    }, 2000);
    return () => clearTimeout(timer);
  }, [notificationStatus])

  const goSearch = () =>{
    let result = [];
    travels.map((travel)=>{
        if(travel.description.toLowerCase().includes(searchMotif.toLowerCase())){
            result.push(travels)
        }
    })
    setSearchTravels(result)
  }

  const restartSearch = () =>{
    setSearchTravels()
  }

  const contextValue = {
    isAdmin,
    setIsAdmin,
    instance,
    DisabelNotif,
    notificationStatus,
    setNotificationStatus,
    travels,
    adminEmail,
    goSearch,
    setSearchMotif,
    searchTravels,
    restartSearch
  };

  return (
      <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};