import { TEMPLATE_SELECTED } from "./types"

export const choose_template = (id) => (dispatch) =>{
    dispatch({
        type:TEMPLATE_SELECTED,
        template_id:id
    })
}
