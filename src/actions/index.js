import * as dataConstants from './../constants';
import * as apis from './../apis/data'

export const fetchData= () => {
     return {
       type: dataConstants.FETCH_DATA,
     };
   };
   
   export const fetchDataSuccess = (data) => {
     return {
       type: dataConstants.FETCH_DATA_SUCCESS,
       payload: {
         data,
       },
     };
   };
   
   export const fetchDataFailed = (err) => {
     return {
       type: dataConstants.FETCH_DATA_FAILED,
       payload: {
         err,
       },
     };
   };
   
   export const fetchDataRequest = (first, second) => {
     return (dispatch) => {
       dispatch(fetchData());
       apis
          .getData(first, second)
          .then((res) => {
               dispatch(fetchDataSuccess(res.data));
          })
          .catch((err) => {
               dispatch(fetchDataFailed(err));
          });
     };
   };