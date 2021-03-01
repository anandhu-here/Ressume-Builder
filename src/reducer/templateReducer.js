import { TEMPLATE_SELECTED } from "../action/types";

const initalState = {
    template_id:null
}

export const templateReducer = (state=initalState, action) =>{
    switch (action.type) {
        case TEMPLATE_SELECTED:
            return{
                ...state,
                template_id:action.template_id
            }
    
        default:
            return{
                ...state
            }
    }
}

