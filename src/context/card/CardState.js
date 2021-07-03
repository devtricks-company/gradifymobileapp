import React,{useReducer} from  'react';
import CardContext from './cardContext';
import cardReducer from './cardReducer';
import {SET_LOADING,GET_ALL_CARDS,FAILD_ALL_CARDS} from '../types';
import {gradify} from '../../axios.config';
const CardState = (props) => {
    const initialState = {
        cards:null,
        card:null,
        loading:true,
        error:null
    }

    const [state,dispatch] = useReducer(cardReducer,initialState);

    const setLoading = () => {
        dispatch({
            type:SET_LOADING
        })
    }
    
    
    const getAllCards = async (studentID) => {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        try {
            const res  = await gradify.get(`/api/v1/experineceStudent/${studentID}`,config);
            console.log(res.data.data);
            dispatch({
                type:GET_ALL_CARDS,
                payload:res.data
            })

        } catch (error) {
            console.log(error)
            dispatch({
                type:FAILD_ALL_CARDS,
                payload:error.response.data.error
            })
        }
    }

    return (<CardContext.Provider value={{
        cards:state.cards,
        card:state.card,
        loading:state.loading,
        error:state.error,
        getAllCards
    }}>
        {props.children}
    </CardContext.Provider>)
}

export default CardState;