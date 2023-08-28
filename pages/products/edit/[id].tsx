import { NextPage } from 'next'

import { useEffect,useState } from 'react';
import {useRouter} from 'next/router';
import Layout from '@/components/Layout';
import axios from 'axios';
import ProductForm from '@/components/ProductForm';
import { IProduct } from '@/pages/api/models/productSchema';


const EditProduct: NextPage = ({}) => {
   const router = useRouter();

   const[product,setProduct] = useState<IProduct|null>();
   const id = router.query.id;
   useEffect(()=>{
    if(id){
      axios.get(`/api/product?id=${id}`).then(res=>{
      setProduct(res.data)})
    }
   },[id])

  return <Layout>
    <h1>Edit {product?.prodName}</h1>
    {product&&<ProductForm {...product}/>}
  </Layout>
}

export default EditProduct