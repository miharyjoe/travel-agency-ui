import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ContextValue = createContext();

export const useDataProvider = () => useContext(ContextValue);

export const DataProvider = ({ children }) => {
  const instance = axios.create({baseURL: 'http://localhost:8080'})

  const getAllTravels = async () => {
    const res = await instance.get('/travels?page=0&page_size=10')
    return await res.data;
}
const getTravelById = async (id) => {
    const res = await instance.get(`/travels/${id}`)
    return await res.data
}

const getAllReservations = async () => {
  const res = await instance.get('/travels?page=0&page_size=10')
  return await res.data;
}

const getReservationById = async (id) => {
    const res = await instance.get('/reservations/${id}')
    return await res.data;
}


const login = async (username, password,roles) => {
     await instance.post(`/login?username=${username}&password=${password}&roles=${roles}`)
}

const contextValue = {
    getAllTravels,
    getAllReservations,
    getTravelById,
    getReservationById,
    login
};

  return (
      <ContextValue.Provider value={contextValue}>{children}</ContextValue.Provider>
  );
};