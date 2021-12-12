export class Product{
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: {categoryName:string};

    constructor(
        id: number, 
        title: string, 
        description: string, 
        image: string,
        price: number,
        category: {categoryName:string}
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
        this.category = category;
    }

}