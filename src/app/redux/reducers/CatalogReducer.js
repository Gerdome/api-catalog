import { GET_API_LIST } from "../actions/CatalogActions";

const initialState = {
    apiList: []
}

const CatalogReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_API_LIST: {
            return {
                ...state,
                apiList: [...action.payload],
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default CatalogReducer;