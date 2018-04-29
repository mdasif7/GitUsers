import * as actionTypes from './actionTypes';
export const onGitusers=values=>{
    return{
        type:actionTypes.ONGITUSERS,
        payload:values
    };
};