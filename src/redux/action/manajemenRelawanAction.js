import axios from "axios"
import {useNavigate} from "react-router-dom"
export const GET_DATA = "GET_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const ADD_DATA = "ADD_DATA"
export const UPDATE_DATA = "UPDATE_DATA"
export const FETCH_START = "FETCH_START"
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA"

function fetchStart(){
    return {
        type: FETCH_START
    }
}

function succesGetData(data){
    return{
        type: SUCCESS_GET_DATA,
        payload: data
    }
}

function hapus(data){
    return {
        type: DELETE_DATA,
        payload: data
    }
}

// function updateData(data) {
//     return {
//         type: UPDATE_TODO,
//         payload: data
//     }
// }

//========================================================================================================================================
export const getData = () => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
        dispatch(succesGetData(result.data))
        console.log(result.data);
    }
}

export const deleteData = (id) =>{
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.delete(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`)
        dispatch(hapus(result.data))
    }
}

export const updateData = (id) => {
    console.log(id);
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.put(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`,
        {status: "accepted"})

        // dispatch(succesGetData(result.data))
        console.log(result.data);
        dispatch(fetchStart)
    }
}