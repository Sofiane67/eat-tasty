export class Product{
    id: number;
    title: string;
    description: string;
    image: string;
    category: {categoryName:string};

    constructor(
        id: number, 
        title: string, 
        description: string, 
        image: string, 
        category: {categoryName:string}
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
    }

}