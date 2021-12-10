import { Product } from "../../../models/Product"
import { sendHttpRequest } from "../../../utils/httpRequest"
import { GET_ALL_PRODUCT } from "./type";

export const getAllProducts = () => {
    return (
        dispatch: (action: {type: string, products: Product[]}) => void
    ) => {
        const response = sendHttpRequest(`${process.env.REACT_APP_DOMAIN}/api/products`, {method: "GET"});
        response.then((products:Product[]) => {
            dispatch({
                type: GET_ALL_PRODUCT, 
                products
            })
        });
    }
}