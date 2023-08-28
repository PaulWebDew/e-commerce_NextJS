import { NextPage } from 'next';
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { CssBaseline, TextField,Snackbar,Box,Paper, Typography, Button} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import {ReactSortable} from 'react-sortablejs';

import style from './ProductForm.module.scss';

interface ItemType {
   id: number;
   name: string;
 }

interface Props {
   _id?:String,
   prodDescr?:String,
   prodName?:String,
   prodPrice?:String,
   prodImages?:ItemType[],
}
const ProductForm: NextPage<Props> = ({
   _id,
   prodDescr:existDescr,
   prodName:existName,
   prodPrice:existPrice,
   prodImages:existImages

   })=> {

const [prodName, setProdName] = useState(existName||'');
const [prodDescr, setProdDescr] = useState(existDescr||'');
const [prodPrice, setProdPrice] = useState(existPrice||'');
const [prodImages, setProdImages] = useState<ItemType[]>(existImages||[]);
const [isLoading, setIsLoading] = useState(false)
const [openSnackBar, setOpenSnackBar] = useState(false)
const [fetchError, setFetchError] = useState(false)
const router = useRouter();



/*------------------------ MUI function for showing flash messages--------------------------*/
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
 ) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
 });
 const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
   if (reason === 'clickaway') {
     return;
   }
   setOpenSnackBar(false);
 };

/*------------------------------------------------------------------------------------------*/
/*-----------function  for update or add new product (depends on instance 'id')-------------*/
const saveProduct: React.FormEventHandler<HTMLFormElement> = async (e)=>{
   e.preventDefault();
   setIsLoading(true);
   let data = {
   prodName, prodDescr, prodPrice, prodImages
   }
   if(_id){
try {
   const updateData = {...data,_id}
   const put = await axios.put('/api/product', updateData);
   if(put.statusText==='OK'){
      setFetchError(false);
      setOpenSnackBar(true);
      setTimeout(()=>{router.push('/products/')}, 1000)};
      return;
} catch (err) {
   setFetchError(true);
   setIsLoading(false);
   setOpenSnackBar(true);
   console.log(err)
}
   }else{
      try{
   const fetch = await axios.post('/api/product', data);
   if(fetch.statusText==='OK') {
      setFetchError(false);
      setOpenSnackBar(true);
      setTimeout(()=>{
         router.push('/products/')}, 500)};
}catch(err){
   setFetchError(true);
   setIsLoading(false);
   setOpenSnackBar(true);
   console.log(err)}
}}
/*-------------------------------------------------------------------------------------------*/

const uploadImage = async (e: React.SyntheticEvent)=> {
const target = e.target as HTMLInputElement;
const files = target?.files;
if(files&&files?.length >0){
   try{
      const data = new FormData();
      for(let file of files){
      data.append('file', file)
      }
      const res = await axios.post('/api/upload', data,{
      headers:{'Content-Type':'multipart/form-data'},
      });
      if(res.statusText === 'OK'){
         const image = res.data.path;
         setProdImages(prev=>[...prev, image]);
      }else{
         console.log('Error save image')
      }

   }catch(err){
      console.log(err)
   }
}
}


   return (
   <div>
      <Box>
      <CssBaseline />
         <Paper elevation={3} sx={{padding:"2rem",  maxWidth:'40rem'}}>
            <form encType="multipart/form-data" style={{display:'flex', flexDirection:'column', gap:'1rem'}} onSubmit={(e)=>saveProduct(e)}  >

              <TextField
               required
               size='small'
               label="Product name"
               variant="outlined"
               value={prodName}
               onChange={(e)=>setProdName(e.target.value)}/>

               <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 1rem'}}>
                  {!prodImages?.length&&<Typography variant="overline"  sx={{color: 'coral', fontWeight:'bold'}} display="block" >
                     no Photos in this Product!
                  </Typography>}

                  <label style={{position:'relative', overflow:'hidden'}}>
                     <Button variant='outlined'>
                        Add photo
                     </Button>
                     <input type="file" onChange={(e)=>uploadImage(e)} style={{position:'absolute', left:0, height:'100%', opacity:0, cursor:'pointer', }} />
                  </label>

               </Box>
               <Box >
                  <ReactSortable
                  className={style.imagesList+' '+style.horizonScroll}
                  list={prodImages}
                  setList={setProdImages}>
                  {prodImages&&prodImages.map((item,ind)=><Image
                  className={style.image}
                  priority
                  key={ind}
                  src={`/${item}`}
                  width={75}
                  height={75}
                  alt='Product image'/>)}</ReactSortable>
               </Box>


               <TextField
               multiline
               size='small'
               label="Description"
               variant="outlined"
               minRows={2}
               maxRows={6}
               value={prodDescr}
               onChange={(e)=>setProdDescr(e.target.value)}/>

               <TextField
               required
               size='small'
               type='number'
               label="Price (in USD)"
               variant="outlined"
               value={prodPrice}
               onChange={(e)=>setProdPrice(e.target.value)}/>

               <LoadingButton
               type='submit'
               loading={isLoading}
               variant="contained" >
                  <span>Save</span>
               </LoadingButton>
            </form>
         </Paper>
      </Box>
      <Snackbar
      anchorOrigin={{ vertical:'top',horizontal: 'left' }}
      key={'top' + 'left'}
      open={openSnackBar}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      // action={action}
      >
      {fetchError?<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Error!The product hasn&apos;t been added!
      </Alert>:<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         The product has been added successfully!
      </Alert>}
      </Snackbar>
   </div>
   );
}

export default ProductForm;