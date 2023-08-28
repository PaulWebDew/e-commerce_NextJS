// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { mongooseConnect } from '@/lib/mongooseConnect';
import Category from './models/categorySchema';




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   const {method}= req;
   if(method==='GET'){
   try {await mongooseConnect()} catch (error) {res.status(403).json({ message: 'forbidden connecting to db' })}
   try{
      const category = await Category.find().populate('categoryParent');
      res.status(200).json(category)
   }catch(err){}

   }
   if(method==='POST'){
   try {await mongooseConnect()} catch (error) {res.status(403).json({ message: 'forbidden connecting to db' })}
   try{
      const {categoryName, categoryParent} = req.body;
      const oldItem  = await Category.findOne({categoryName:categoryName});
      if(!oldItem){
         const cat = new Category({categoryName,categoryParent});
         await cat.save();
         res.status(200).json(cat)} else {
            res.status(400).json({message:'forbidden adding duplicate key'})
         }
   }catch(err){
      console.log(err)
   }
   }
}