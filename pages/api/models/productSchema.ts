import  mongoose  from "mongoose";
export interface IProduct{
   prodDescr:String,
   prodName:String,
   prodPrice:String,
   prodImages:string[],
}

const productSchema = new mongoose.Schema({
   prodDescr:String,
   prodName:{type:String, required:true},
   prodPrice:{type:String, required:true},
   prodImages:{type: [String]},
})
const ProductModel =()=> mongoose.model<IProduct>('Product', productSchema)

export default  (mongoose.models.Product||ProductModel()) as ReturnType<typeof ProductModel>;

