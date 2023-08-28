import { NextPage } from 'next';
import React from 'react';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {
   Button,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   DialogTitle,
   Box,
   Dialog,
   Snackbar,
   Container,
   LinearProgress } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import axios from 'axios';

import Layout from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchProducts } from '@/store/slices/productsSlice';

type DeleteUser ='';
interface Props {};
export interface SimpleDialogProps {
   open: boolean;
   selectedValue: string;
   onClose: (value: string) => void;
 }

const Products: NextPage<Props> = ({}) => {

   const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
      props,
      ref,
    ) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

const dispatch = useAppDispatch();

const[open, setOpen] = useState(false)
const[openSnackBar, setOpenSnackBar] = useState(false);
const[fetchError, setFetchError] = useState(false);


const goods = useAppSelector(state=>state.product.value);
const status = useAppSelector(state=>state.product.status);


const handleClickOpen = async(id:String)=>{
setOpen(true);
}
const handleClose = () => {
   setOpen(false)
 };
const handleCloseSnack = () => {
   setOpenSnackBar(false)
 };

const handleDelete = async (id:String)=>{
   try{
      const del = await axios.delete('/api/product/?id='+id);
      if(del.statusText=== 'OK'){
         setOpen(false);
         setOpenSnackBar(true);
         dispatch(fetchProducts());
      }
   }catch(err){
      console.log(err)
   }
 }


useEffect(()=>{
   dispatch(fetchProducts());
},[dispatch])
  return (
      <Layout>
         <div>
            <Link href={'/products/new'}>
               <Button >Add new product</Button>
            </Link>
         </div>

         <div>
            <Paper>
               {status==='loading'&&<LinearProgress/>}
               <TableContainer sx={{maxHeight:'40rem'}}>
                  <Table stickyHeader>
                        <TableHead>
                           <TableRow>
                              <TableCell>ID</TableCell>
                              <TableCell>Product</TableCell>
                              <TableCell>Subscribe</TableCell>
                              <TableCell>Prise(USD)</TableCell>
                              <TableCell>Action</TableCell>
                           </TableRow>
                        </TableHead>
                     <TableBody >
                        {goods&&goods.map((item,ind)=><TableRow key={ind}>
                           <TableCell>{item._id}</TableCell>
                           <TableCell>{item.prodName}</TableCell>
                           <TableCell>{item.prodDescr}</TableCell>
                           <TableCell>{item.prodPrice}</TableCell>
                           <TableCell sx={{display:'flex', gap:'1rem'}}>
                              <Link href={`products/edit/${item._id}`}>
                                 <Button
                                 sx={{textTransform:'none',borderRadius:'0.7rem'}}
                                 variant="contained"
                                 startIcon={<EditOutlinedIcon />}
                                 >
                                 Edit
                                 </Button>
                              </Link>
                              <Button
                              onClick={()=>handleClickOpen(item._id)}
                              sx={{textTransform:'none', borderRadius:'0.7rem'}}
                              variant="contained"
                              startIcon={<DeleteForeverOutlinedIcon />}
                              >
                              Delete
                              </Button>
                              <Dialog
                              open={open}
                              onClose={handleClose}>
                                 <Paper elevation={3}>
                                    <Container>
                                       <DialogTitle sx={{textAlign:'center'}}>
                                          Do you really want to delete product<br/> &quot;{item.prodName}&quot;
                                       </DialogTitle>
                                       <Box sx={{display:'flex', justifyContent:"center", gap:'1rem', paddingBottom:'1rem'}}>
                                          <Button  variant='contained' color='error' onClick={()=>handleDelete(item._id)}>
                                             Yes
                                          </Button>
                                          <Button variant='contained' onClick={()=>setOpen(false)}>
                                             No
                                          </Button>
                                       </Box>
                                    </Container>
                                 </Paper>
                              </Dialog>
                           </TableCell>
                        </TableRow>)}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Paper>
         </div>
         <Snackbar
      anchorOrigin={{ vertical:'top',horizontal: 'left' }}
      key={'top' + 'left'}
      open={openSnackBar}
      autoHideDuration={6000}
      onClose={handleCloseSnack}
      message="Note archived"
      // action={action}
      >
      {fetchError?<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Error!The product hasn&apos;t been deleted!
      </Alert>:<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         The product has been deleted successfully!
      </Alert>}
      </Snackbar>
      </Layout>
  )
}

export default Products