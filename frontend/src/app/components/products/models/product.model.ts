import { CategoryModel } from "src/app/components/categories/models/category.model";

export class ProductModel{
    _id:string ="";
    name:string="";
    categories:CategoryModel []=[];
    stock:number=0;
    price:number=0;
    isActive:boolean;
    createdDate:string="";
    imageUrls:any []=[];


}