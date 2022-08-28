import * as types from "./actionType";
import axios from "axios";

const getTask = (id) => (dispatch) => {
    dispatch({type:types.GET_TASK_REQUEST})
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpc2hpQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzMDk2MWM0ZjI2Zjk3MTI1YmNkOTdlMiIsImlhdCI6MTY2MTU4ODg3N30.CS_aswAQq6yVVYX7LMOiBDZ2C5ZjZFnN-iPoSV22l6w")
    axios.get(`http://localhost:8080/task/${id}`)
    .then((r) => {
        // console.log("get",r.data);
        dispatch({type:types.GET_TASK_SUCCESS,payload:r.data})
    })
    .catch((err) => {
        dispatch({type:types.GET_TASK_FAILURE})
    })
}

const createTask = (payload,id) => (dispatch) => {
    dispatch({type:types.ADD_TASK_REQUEST})

    return axios.post(`http://localhost:8080/task/${id}/create`,{...payload})
    .then((r) => {
       return dispatch({type:types.ADD_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.ADD_TASK_FAILURE})
    })
}

const updateTask = (payload,id) => (dispatch) => {
    dispatch({type:types.UPDATE_TASK_REQUEST})

    return axios.patch(`http://localhost:8080/task/update/${id}`,{...payload})
    .then((r) => {
        return dispatch({type:types.UPDATE_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.UPDATE_TASK_FAILURE})
    })
}


const deleteTask = (id) => (dispatch) => {
    dispatch({type:types.DELETE_TASK_REQUEST})

   return axios.delete(`http://localhost:8080/task/delete/${id}`)
    .then((r) => {
       return dispatch({type:types.DELETE_TASK_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.DELETE_TASK_FAILURE})
    })
}


export {getTask,createTask,updateTask,deleteTask};