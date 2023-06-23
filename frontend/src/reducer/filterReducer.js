const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PROPERTIES":
            return {
                ...state,
                filter_property: [...action.payload],
                all_property: [...action.payload],
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
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
            }

        case "UPDATE_FILTERS":
            const { name } = action.payload;
            // console.log(name);

            if (name === "gatedSecurity" || name === "lift" || name === "water" || name === "parking" || name === "pets" || name === "veg") {
                const { checked } = action.payload;
                console.log(name, state.filters.gatedSecurity);
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [name]: checked
                    }
                }
            } else {
                const { value } = action.payload;
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [name]: value
                    }
                }
            }

        case "FILTER_DESIGNS":
            let { all_property } = state;
            let tempFilterProperty = [...all_property];

            const { text, category, minBed, maxBed, minBath, maxBath, minArea, maxArea, gatedSecurity, lift, parking, water, veg, pets } = state.filters;

            if (text) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.name.toLowerCase().includes(text);
                })
            }

            if (category) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.category === category || category === "All";
                })
            }

            if (minBed || maxBed) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.bedrooms >= minBed && curEle.bedrooms <= maxBed;
                })
            }

            if (minBath || maxBath) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.bathrooms >= minBath && curEle.bathrooms <= maxBath;
                })
            }

            if (minArea || maxArea) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.propertySize >= minArea && curEle.propertySize <= maxArea;
                })
            }

            if (gatedSecurity) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.gatedSecurity === gatedSecurity;
                })
            }

            if (lift) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.lift === lift;
                })
            }

            if (water) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.water === water;
                })
            }

            if (parking) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.parking === parking;
                })
            }

            if (pets) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.pets === pets;
                })
            }

            if (veg) {
                tempFilterProperty = tempFilterProperty.filter((curEle) => {
                    return curEle.veg === veg;
                })
            }

            return {
                ...state,
                filter_property: tempFilterProperty,
            }

        default: return state;
    }
}

export default filterReducer;