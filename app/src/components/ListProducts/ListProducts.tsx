import { useSelector } from "react-redux"
import ProductComponent from "../Product/Product";
import { Product } from "../../models/Product";

const ListProducts = () => {
    const products = useSelector((store:any) => store.products);
    
    return (
        <div>
            {
                products.map((product:Product, index:number) => <ProductComponent key={index} title={product.title} image={product.image} price={product.price} description={product.description}/>)
            }
        </div>
    )
}

export default ListProducts;