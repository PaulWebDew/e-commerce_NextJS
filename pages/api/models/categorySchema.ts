import mongoose from 'mongoose';

export interface ICategory{
categoryName:String,
categoryParent:{type:mongoose.Types.ObjectId}|String,
}

const categorySchema = new mongoose.Schema({
   categoryName :{type:String, required:true},
   categoryParent:{type:mongoose.Types.ObjectId, ref:'Category'}
})

const CategoryModel = () => mongoose.model<ICategory>('Category', categorySchema);

export default  (mongoose.models.Category||CategoryModel()) as ReturnType<typeof CategoryModel>;
