import { EDUCATION_SUBMIT, EXPERIENCE_SUBMIT, PERSONAL_SUBMIT, SKILLS_SUBMIT } from "../action/types";

const intiatState = {
    personal_data:null,
    education:[],
    experience:[],
    skill:[]
}



export const buildReducer = (state=intiatState, action) =>{
    switch (action.type) {
        case PERSONAL_SUBMIT:
            return{
                ...state,
                personal_data:action.personal_data
            }
            
        case EDUCATION_SUBMIT:
            return{
                ...state,
                education:action.education_data
            }
        case EXPERIENCE_SUBMIT:
            return{
                ...state,
                experience:action.experience_data
            }
        case SKILLS_SUBMIT:
            return{
                ...state,
                skill:action.skills_data
            }
        default:
            return{
                ...state
            }
    }
}