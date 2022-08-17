import axios from 'axios';

export const GET_API_LIST = 'GET_API_LIST';

export const getApiList = () => (dispatch) => {
    axios.get('/api/catalog/api-list').then((res) => {
      dispatch({
        type: GET_API_LIST,
        payload: res.data,
      });
    });
  };
  