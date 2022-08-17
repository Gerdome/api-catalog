import { GET_API_LIST, GET_DATA_SOURCE_LIST, GET_OBJECT_OWNER_LIST } from "../actions/CatalogActions";

const initialState = {
    apiList: [],
    dataSourceList: [],
    objectOwnerList: []
}

const CatalogReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_API_LIST: {
            return {
                ...state,
                apiList: [...action.payload],
            };
        }
        case GET_DATA_SOURCE_LIST: {
            return {
                ...state,
                dataSourceList: [...action.payload],
            };
        }
        case GET_OBJECT_OWNER_LIST: {
            return {
                ...state,
                objectOwnerList: [...action.payload],
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