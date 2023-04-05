import React from 'react'
import { useRef } from 'react';
import Form from '../../components/Form/index'
import { FC } from 'react';
import { RefObject } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AddProductProps from './AddProductProps';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


interface props{
    handleAddNewProductData: (title: string, price: number, size: string)=> any,
    handleView: any
}

export default function AddNewProduct({handleAddNewProductData, handleView}: props)  {
    const addProductRef:  RefObject<Form | null | undefined>= useRef();
    
    const handleLogin=(e: any)=>{
        e.preventDefault();
        const {isFormValid, formData}: any= addProductRef.current?.getFormData();
        console.log(formData);
        handleAddNewProductData(formData.title, formData.price, formData.size)
        handleView();

    }
  return (
    <div><Box 
    >
         <Grid container spacing={1} >
             <Grid item>
                 <Typography sx={{marginLeft: "10px"}}>Add Product</Typography>
                 <Form
                 ref={addProductRef as RefObject<Form>}
                 model={AddProductProps()}
                 values={{ }}
                 />
             <PrimaryButton  sx={{marginTop: "60px", marginLeft: "20px" , backgroundColor: "black", color: "white"}} onClick={handleLogin}>Add Product</PrimaryButton>
             </Grid>
         </Grid>
     </Box></div>
  )
}
