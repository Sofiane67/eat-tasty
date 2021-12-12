import { FC } from "react";

const Product:FC<
{
    image:string,
    title:string,
    price: number,
    description: string
}
> = ({image, title, price, description}) => {
    return (
        <div>
            <div>
                <img src={`../../images/products/burger/${image}`} alt="text" />
            </div>
            <div>
                <div>
                    <h3>{title}</h3>
                    <span>€ {price} EUR</span>
                </div>
                <p>{description}</p>
                <form action="">
                    <input type="number" value="1"/>
                    <button>Ajouter au panier</button>
                </form>
            </div>
        </div>
    )
}

export default Product;