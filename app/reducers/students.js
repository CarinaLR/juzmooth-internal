import axios from 'axios'

//ACTION TYPE
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//ACTION CREATORS
export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
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

//REDUCER
export default function reducerStudents(state = [], action) {
    switch(action.type) {
        case GET_STUDENTS:
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