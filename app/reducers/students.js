import axios from 'axios'

//ACTION TYPE
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//ACTION CREATORS
export const getStudents = (data) => ({
    type: GET_STUDENTS,
    students: data
});

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    student
});

export const updateStudent = (student) => ({
    type: UPDATE_STUDENT,
    student
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

export const newStudent = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.post('/api/students')
        dispatch(addStudent(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

export const editStudent = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.put('/students')
        dispatch(updateStudent(data))
        } catch (error) {
            dispatch(console.error(error))
        }
    }
};

export const deleteStudent = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.delete('/students', studentId)
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
            console.log('ACTION STUDENTS ->', action.students)
            return action.students;
        case ADD_STUDENT:
            return [state.students, action.student];
        case UPDATE_STUDENT:
            return state.map((student) => student.id === action.student.id ? action.student : student);
        case REMOVE_STUDENT:
            return [state.students].filter((student) => student.id !== action.studentId);
        default:
            return state;
    }
}