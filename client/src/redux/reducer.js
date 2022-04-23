import * as actionTypes from './actionTypes';



const INITIAL_STATE = {


    token: null,
    userId: null,
    authLoading:false,
    authFailedMsg: null,

}

export const reducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
        


   
 

        //Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }

        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg:null,
                token: null,
                userId: null,
            }

        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authFailedMsg:null,
                authLoading: action.payload, 
            }

            case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload, 
            }
        default:
            return state;
    }

}