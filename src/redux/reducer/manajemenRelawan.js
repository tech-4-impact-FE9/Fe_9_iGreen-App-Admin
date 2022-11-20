import {FETCH_START, SUCCESS_GET_DATA, ADD_DATA, DELETE_DATA, UPDATE_DATA} from "../action/manajemenRelawanAction"

const initialState = {
    relawanPendaftar: [{
        // id: "",
        // name_event: "",
        // nomor_telepon: "",
        // link_cv: "",
        // link_studentCard: "",
        // link_HealthLetter: "",
        // link_IDCard: "",
        // email: "",
        // reason: "",
        // nama: "",
        // status: "",
        // periode_event: "",
        // gambar_event: "",
        // detail_aktivitas: "",
        // address: "",
        // volunteer_requirment: "",
        // id_event: ""
    }],
    isLoading: false
}

const manajemenRelawan = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_GET_DATA:
            return {
               ...state,
               relawanPendaftar: action.payload,
               isLoading: false 
            }
        case DELETE_DATA:
            return{
                ...state,
                relawanPendaftar: action.payload,
                isLoading: false
            }
        case UPDATE_DATA:
            return {
                relawanPendaftar: action.payload,
                isLoading: false
            }
        default: 
        return state
    }
}

export default manajemenRelawan