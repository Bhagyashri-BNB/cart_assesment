import React, { FC, useState } from 'react'
import { Button, Divider, Typography } from '@mui/material';
import { Box, Grid } from '@mui/material'

import { useEffect } from 'react';
import { Productsdata } from '../../Productsdata';
import DeleteIcon from '@mui/icons-material/Delete';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


type CartType = {
    // Define the type of your cartDetails prop
    // It seems like an array of some kind, so adjust the type accordingly
    // For example, if it's an array of objects with `id`, `title`, `price`, and `quantity` properties:
    // { id: number, title: string, price: number, quantity: number }[]
    cartDetails: any;
    // Define the type of the setCartDetails function
    // It should accept an argument with the same type as cartDetails
    setCartDetails: React.Dispatch<React.SetStateAction<any>>;
    deleteProduct: (id: number) => void;
  };


const AddCartTotal: React.FC<CartType> = ({ cartDetails,setCartDetails, deleteProduct}) => {
    const [counter, setCounter] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [mydata, setMydata] = useState<any>()

    const Increment = (id: number) => {

        const updatedCartDetails = cartDetails.map((cart: any) => {
            if (cart.id === id) {
                return { ...cart, title:cart.title, id:cart.id, price: cart.price, quantity:cart.quantity+1}

            }
            return cart
        })

        console.log(updatedCartDetails)
        setCartDetails(updatedCartDetails);
    }
    const Decrement = (id: number) => {
        const updatedCartDetails = cartDetails.map((cart: any) => {
            if (cart.id === id && cart.quantity>1) {
                return { ...cart, title:cart.title, id:cart.id, price: cart.price, quantity:cart.quantity-1}

            }
            return cart
        })

        console.log(updatedCartDetails)
        setCartDetails(updatedCartDetails);
    }

    const calculateTotalPrice = () => {
        let total = 0;
        cartDetails.forEach((mydata:any) => {
            total += (mydata.quantity*mydata.price);
        });
        setTotalPrice(total);
    };
    useEffect(() => {
        calculateTotalPrice();
      }, [cartDetails]);



    return (
        <div>
            <Box sx={{ padding: "1rem" }}>
                <Typography
                    sx={{ margin: "10px",fontWeight: 'bold' }}
                >Cart Details:{cartDetails.length}
                </Typography>
                {(cartDetails.length == 0? 
                <Typography>Your Cart is Empty 
                <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
                </Typography> 
                
                : " ")}
                <Divider   sx={{marginTop: "6px" ,marginBottom: "1rem" }}  />

                {cartDetails.map((mydata: any) => {
                    
                    return (
                        
                        <Grid container key={mydata.id}>
                          
                            <DeleteIcon 
                                onClick={()=>deleteProduct(mydata.id)}
                                sx={{marginLeft: "10rem"}}
                                
                            ></DeleteIcon>
                            <Grid item xs={12}>
                                
                                <Typography>{mydata.title}</Typography>
                                <Typography>Quantity: {mydata.quantity}</Typography>
                                <Typography>{'$' + mydata.price}</Typography>
                                <PrimaryButton  
                                sx={{ color: " white", backgroundColor: "black", margin: "6px"}}
                                onClick={()=>Increment(mydata.id)}>
                                 +</PrimaryButton>
                                <PrimaryButton 
                                sx={{ color: " white", backgroundColor: "black"}}
                                onClick={()=>Decrement(mydata.id)}>
                                -</PrimaryButton>
                            </Grid>

                            <Grid item xs={12}>
                               <Typography>Item Price {'$' + (mydata.quantity*mydata.price)}</Typography>
                              {/* <Typography>TotalPrice= ${cartDetails.reduce((acc, price) => acc + mydata.price * counter, 0)}</Typography> */}
                                <hr />
                            </Grid>
                        </Grid>
                    )
                })}
                <Typography sx={{fontWeight: 'bold'}}>TotalPrice= ${totalPrice}</Typography>
            </Box>
        </div>
    )
}

export default AddCartTotal