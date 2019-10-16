import axios from 'axios'

//ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

//ACTION CREATORS
export const getCampuses = (data) => ({
    type: GET_CAMPUSES,
    campuses: data
});

export const addCampus = (campus) => ({
    type: ADD_CAMPUS,
    campus
});

export const updateCampus = (campus) => ({
    type: UPDATE_CAMPUS,
    campus
});

export const removeCampus = (campusId) => ({
    type: REMOVE_CAMPUS,
    campusId
});

//MIDDLEWARE AND REDUX-THUNK
export const gettingCampuses = () => {  
      return async (dispatch) => {
        try {
          const {data} = await axios.get('/api/campuses')
          
          dispatch(getCampuses(data))
        } catch (error) {
          dispatch(console.error(error))
        }
      }
  }

export const newCampus = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.post('/campuses', campus)
        dispatch(addCampus(data));
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

export const editCampus = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.put('/campuses', campus)
        dispatch(updateCampus(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

export const deleteCampus = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.delete('/campuses', campusId)
        dispatch(removeCampus(data.id))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};


//REDUCER
export default function reducerCampuses(state = [], action) {
    switch(action.type) {
        case GET_CAMPUSES:
            console.log('ACTION ->', action.campuses)
            return action.campuses;
        case ADD_CAMPUS:
            return [ ...state, action.campus];
        case UPDATE_CAMPUS:
            return state.map((campus) => campus.id === action.campus.id ? action.campus : campus);
        case REMOVE_CAMPUS:
            return [state].filter((campus) => campus.id !== action.campusId);
        default:
            return state;
    }
}