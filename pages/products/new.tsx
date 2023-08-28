import { NextPage } from 'next';
import * as React from 'react';

import Layout from '@/components/Layout';
import ProductForm from '@/components/ProductForm';

const New: NextPage = ({}) => {

  return (
   <Layout>
      <h1>New product</h1>
      <ProductForm/>
   </Layout>)
}

export default New