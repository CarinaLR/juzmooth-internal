import axios from 'axios'

//ACTION TYPE
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//ACTION CREATORS
export const getStudents = (data) => ({
    type: GET_STUDENTS,
    students: data
});

export const getOneStudent = (student) => ({
    type: GET_STUDENT,
    student
})

export const addStudent = (newStudent) => ({
    type: ADD_STUDENT,
    students: newStudent
});

export const removeStudent = (studentId) => ({
    type: REMOVE_STUDENT,
    studentId
});

//MIDDLEWARE AND REDUX-THUNK
export const gettingStudents = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.get('/api/students')
        dispatch(getStudents(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

export const getSingleStudent = (id) => {  
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/api/students/${id}`)    
        dispatch(getStudents(data))
      } catch (error) {
        dispatch(console.error(error))
      }
    }
};

export const newStudent = (newStudent) => {
    return async (dispatch) => {
        try {
        const { data } = await axios.post('/api/students', newStudent)
        dispatch(addStudent(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};


export const deleteStudent = (id) => {
    return async (dispatch) => {
        try {
        const { data } = await axios.delete(`/api/students/${id}`)
        dispatch(removeStudent(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

//REDUCER
export default function reducerStudents(state = [], action) {
    switch(action.type) {
        case GET_STUDENTS:
            return action.students;
        case GET_STUDENT:
            return action.student 
        case ADD_STUDENT:
            return [ ...state, action.students];
        case REMOVE_STUDENT:
            return [state.students].filter((student) => student.id !== action.studentId);
        default:
            return state;
    }
}