const blogReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_API_DATA":
            return {
                ...state,
                isLoading: false,
                blogs: action.payload,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default: return state;
    }
}

export default blogReducer;