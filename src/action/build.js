import { EDUCATION_SUBMIT, EXPERIENCE_SUBMIT, PERSONAL_SUBMIT, SKILLS_SUBMIT } from "./types"


export const personal_submit = (data) => dispatch =>{
    dispatch({
        type:PERSONAL_SUBMIT,
        personal_data : data
    })
}

export const education_submit = (data) => dispatch =>{
    dispatch({
        type:EDUCATION_SUBMIT,
        education_data : data
    })
}


export const experience_submit = (data) => dispatch =>{
    dispatch({
        type:EXPERIENCE_SUBMIT,
        experience_data : data
    })
}


export const skill_submit = (data) => dispatch =>{
    dispatch({
        type:SKILLS_SUBMIT,
        skills_data : data
    })
}