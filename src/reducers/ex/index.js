
import { handleActions } from 'redux-actions';
import {setItems, load } from '../../actions/dealTable';
const InitailState = {
    loading: true
}

function onLoad(state,payload){
    return {
        ...state,
        payload,
        loading:false
    };
}

export  const exReducer = handleActions({
    setItems: (state,action) => {
        return onLoad(state, action.payload.items.results);
    },
    load: (state)=>{
        return {
            ...state,
        };
    }
  }, InitailState);
