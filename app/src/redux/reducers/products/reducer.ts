import { Product } from "../../../models/Product";
import { GET_ALL_PRODUCT } from "../../actions/products/type";

const initState:Product[] = [];

export const products = (state = initState, action:{type:string, products: Product[]}) => {
    let newState;
    
    switch (action.type) {
        case GET_ALL_PRODUCT:
            newState = action.products
            break;
    
        default:
            return state;
    }
    return newState
}