import React, { createContext, useContext, useEffect, useReducer } from 'react'
import propertyReducer from '../reducer/propertyReducer';
import axios from "axios";

const PropertyContext = createContext();

const initialState = {
    properties: [],
    isLoading: false,
    isError: false,
};

const PropertyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(propertyReducer, initialState);

    const getProperties = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get("/api/property/getproperty");
            const properties = await response.data;
            dispatch({ type: "SET_API_DATA", payload: properties });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <PropertyContext.Provider value={{ ...state }} >
            {children}
        </PropertyContext.Provider>
    );
}

const usePropertyContext = () => {
    return useContext(PropertyContext);
}

export { PropertyProvider, PropertyContext, usePropertyContext };