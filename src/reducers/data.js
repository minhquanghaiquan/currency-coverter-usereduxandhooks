import * as dataConstants from "./../constants/index";

const initialState ={};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.FETCH_DATA:
      return {}

    case dataConstants.FETCH_DATA_SUCCESS:
      const { data} = action.payload;
      return data

    case dataConstants.FETCH_DATA_FAILED:
    

      return {}

    default: {
      return state;
    }
  }
};

export default dataReducer;
