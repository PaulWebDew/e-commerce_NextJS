import mongoose from 'mongoose';
import type {NextApiResponse, NextApiRequest} from 'next';
import { mongooseConnect } from '@/lib/mongooseConnect';
import  Product  from './models/productSchema';

 export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
 ) {
   const {method} = req;
   if(method==='POST'){
     try{mongooseConnect();}catch(err){return res.status(400).json({message:'Error DB connect!'+err})}
     try{
      console.log(req.body)
       const addProduct = new Product(req.body);
       const resl = await addProduct.save();
      res.json(req.body);
    }catch(err){res.status(400).json({message:err})}
   }
   if(method === 'GET'){
    if(req.query.id){
      try{mongooseConnect();}catch(err){res.status(400).json({message:'Error DB connect!'+err})}
      try{

        let id = new mongoose.Types.ObjectId(req.query.id.toString());

        const product =await Product.findOne({_id:id});
        return res.status(200).json(product)
      }catch(err){
        return res.status(404).json({message:'Error find product!',err})
        console.log(err);
      }
    }
    try {
      mongooseConnect();
      const goods = await Product.find();
      res.json(goods)
    } catch (err) {
      res.status(404).json({message:'Error find products', err})
      console.log(err);
    }
   }
   if(method==='PUT'){
    try{mongooseConnect();}catch(err){res.status(400).json({message:'Error DB connect!'+err})}
    try{const data = req.body;
      const filter={_id:data._id};
      const update ={...data}
      await Product.findOneAndUpdate(filter,update);
      res.json(data)
    }catch(err){res.status(400).json({message:'Didn`t update!'+err})}
   }
   if(method ==='DELETE'){
    if(req.query.id){
      try{mongooseConnect();}catch(err){res.status(400).json({message:'Error DB connect!'+err})}
      try {
        const id = req.query.id;
        await Product.deleteOne({_id:id});
        res.json({id})
      } catch (err) {
        res.status(400).json({message:'Didn`t delete!'+err})
          console.log('ERROR:'+err)
      }
    }
   }
 }
