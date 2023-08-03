import { ADD_CART,  REMOVE } from "./type"

export const Add = (items)=>{
    return{
        type: ADD_CART,
        payload: items
    }
}
export const DELETE = (id)=>{
    return{
        type: REMOVE,
        payload: id,
    }
}