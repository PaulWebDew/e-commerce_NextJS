import React from 'react';
import Layout from '@/components/Layout';
import { Box, Button, CssBaseline, FormControl, InputLabel, MenuItem, Paper, Select, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, styled } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import style from './Categories.module.scss';

export interface ICategory{
   _id:String,
   categoryName:String,
   categoryParent:ICategory
}


interface Props {}

const Categories: NextPage<Props> = ({}) => {

const [newCategory, setNewCategory] = useState<string|undefined>('');
const [openSnackBar, setOpenSnackBar] = useState(false)
const [fetchError, setFetchError] = useState(false)
const [categories, setCategories] = useState<ICategory[]>([])
const [selectedParent, setSelectedParent] = useState<string>('')

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

  const getCategory = async ()=>{
   try{
      const {data} = await axios.get('/api/category/');
      setCategories(data)
   }catch(err){
      console.log(err)
   }
}

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async  (e)=>{
   e.preventDefault();
   const item = {
      categoryName:newCategory,
      categoryParent:selectedParent};
   try{
      const res = await axios.post('/api/category/', item);
      if(res.statusText==='OK'){
         setFetchError(false);
         setOpenSnackBar(true);
         getCategory();
         setNewCategory('');
         setSelectedParent('')
      }

   }catch(err){
         setFetchError(true);
         setOpenSnackBar(true);
   }
}

useEffect(()=>{
   getCategory()}, [])


  return <Layout>
   <Box>
      <CssBaseline/>
      <Paper elevation={3} sx={{padding:"2rem",  maxWidth:'40rem', maxHeight:"45rem"}}>
         <Box component={'form'} onSubmit={handleSubmit} sx={{display:"flex", gap:'1rem', alignItems:'center'}}>
         <TextField
                  autoComplete="given-name"
                  name="New Category"
                  required
                  fullWidth
                  id="firstName"
                  label="New Category"
                  autoFocus
                  size='small'
                  value={newCategory}
                  onChange={(e)=>setNewCategory(e.target.value)}
                />
                <FormControl fullWidth>
                  <InputLabel id="select-parent" size='small'>Parent</InputLabel>
                  <Select
                     size='small'
                     labelId="select-parent"
                     id="demo-simple-select"
                     value={selectedParent}
                     label="Parent"
                     onChange={(ev)=>setSelectedParent(ev.target.value as string)}
                  >
                     {categories&&categories.map((item, ind)=><MenuItem key = {item._id + ind.toString()} value={item._id.toString()}>{item.categoryName}</MenuItem> )}
                  </Select>
                </FormControl>
         <Button variant="contained" type='submit'>Save</Button>
         </Box>
         <Paper elevation={3} sx={{padding:'1rem', marginTop:'2rem'}}>
            <TableContainer sx={{maxHeight:'35rem'}} className={style.verticalScroll} >
               <Table stickyHeader size='small' >
                     <TableHead  >
                        <TableRow  >
                           <TableCell sx={{fontWeight:'bolder', bgcolor:'rgba(98, 163, 233, 0.4)'}}>Category</TableCell>
                           <TableCell sx={{fontWeight:'bolder', bgcolor:'rgba(98, 163, 233, 0.4)'}}>Parent</TableCell>
                           <TableCell align='center' sx={{fontWeight:'bolder', bgcolor:'rgba(98, 163, 233, 0.4)'}}>Actions</TableCell>
                        </TableRow>
                     </TableHead>
                  <TableBody >
                     {categories&&categories.map((item,ind)=><TableRow key={ind}>
                        <TableCell>{item.categoryName}</TableCell>
                        <TableCell>{item?.categoryParent?.categoryName}</TableCell>
                        <TableCell sx={{display:'flex', gap:"0.5rem"}} align='right'>
                           <Button sx={{maxHeight:'1.5rem', textTransform:'none'}} variant="outlined">Edit</Button>
                           <Button sx={{maxHeight:'1.5rem', textTransform:'none'}} variant="outlined">Delete</Button>
                        </TableCell>
                     </TableRow>)}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>

      </Paper>
   </Box>
   <Snackbar
   anchorOrigin={{ vertical:'top',horizontal: 'left' }}
   key={'top' + 'left'}
   open={openSnackBar}
   autoHideDuration={6000}
   onClose={handleClose}>
        {!fetchError?<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Category was added successfully!
        </Alert>:
        <Alert severity="error">Category has not been added!</Alert>}
   </Snackbar>
  </Layout>
}

export default Categories