import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListProducts from "../../components/ListProducts/ListProducts";
import { getAllProducts } from "../../redux/actions/products/action";

const Menu = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    },[dispatch])

    return (<ListProducts/>)
}

export default Menu;