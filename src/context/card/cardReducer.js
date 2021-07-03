import { SET_LOADING,GET_ALL_CARDS,FAILD_ALL_CARDS } from '../types';

const cardReducer = (state,action) => {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading:false
            }
        case GET_ALL_CARDS:
            return{
                ...state,
                cards:action.payload.data,
                loading:false,
                error:null,
                
            }   
            
        case FAILD_ALL_CARDS:
            return {
                ...state,
                cards:null,
                loading:false,
                error:action.payload
            }    
        default:
            return state    
    }
}

export  default cardReducer