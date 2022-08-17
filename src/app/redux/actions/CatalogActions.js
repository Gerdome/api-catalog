import axios from 'axios';

export const GET_API_LIST = 'GET_API_LIST';
export const GET_DATA_SOURCE_LIST = 'GET_DATA_SOURCE_LIST';
export const GET_OBJECT_OWNER_LIST = 'GET_OBJECT_OWNER_LIST';

export const getApiList = () => (dispatch) => {
    axios.get('/api/catalog/api-list').then((res) => {
      dispatch({
        type: GET_API_LIST,
        payload: res.data,
      });
    });
  };

  export const getDataSourceList = () => (dispatch) => {
    axios.get('/api/catalog/data-source-list').then((res) => {
      dispatch({
        type: GET_DATA_SOURCE_LIST,
        payload: res.data,
      });
    });
  };

  export const getObjectOwnerList = () => (dispatch) => {
    axios.get('/api/catalog/object-owner-list').then((res) => {
      dispatch({
        type: GET_OBJECT_OWNER_LIST,
        payload: res.data,
      });
    });
  };
  
  