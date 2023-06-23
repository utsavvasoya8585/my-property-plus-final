import React, { createContext, useContext, useEffect, useReducer } from 'react'
import filterReducer from '../reducer/filterReducer';
import axios from "axios";
import { usePropertyContext } from './property_context';

const FilterContext = createContext();

const initialState = {
    filter_property: [],
    all_property: [],
    isLoading: false,
    isError: false,
    filters:{
        text: "",
        category: "All",
        minBed: 0,
        maxBed: 500,
        minBath: 0,
        maxBath: 500,
        minPrice: 0,
        maxPrice: 1000000,
        minArea: 0,
        maxArea: 1000000,
        gatedSecurity: false, 
        lift: false, 
        parking: false, 
        water: false, 
        veg: false, 
        pets: false,
    }
};

const FilterProvider = ({ children }) => {

    const {properties} = usePropertyContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const updateFilters = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let checked = event.target.checked;
        if(name === "gatedSecurity" || name === "lift" || name === "water" || name === "parking" || name === "pets" || name === "veg") return dispatch({type: "UPDATE_FILTERS", payload: {name, checked}});
        return dispatch({type: "UPDATE_FILTERS", payload: {name, value}});
    }

    // To clear all filters
    const clearFilter = () => {
        dispatch({type: "CLEAR_FILTERS"});
    }

    useEffect(() => {
        dispatch({type: "FILTER_DESIGNS"});
    }, [state.filters]);

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PROPERTIES", payload: properties});
    }, [properties])

    return (
        <FilterContext.Provider value={{ ...state, updateFilters, clearFilter }} >
            {children}
        </FilterContext.Provider>
    );
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterProvider, FilterContext, useFilterContext };