import axios from axios

//ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

//ACTION CREATORS
export const getCampuses = (campuses) => ({
    type: GET_CAMPUSES,
    campuses
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

//REDUCER
export default function reducerCampuses(state = [], action) {
    switch(action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case ADD_CAMPUS:
            return [state.campuses, action.campus];
        case UPDATE_CAMPUS:
            return state.map((campus) => campus.id === action.campus.id ? action.campus : campus);
        case REMOVE_CAMPUS:
            return [state.campuses].filter((campus) => campus.id !== action.campusId);
        default:
            return state;
    }
}