import React, { useState } from 'react'
import Grid from '@mui/material/Grid/Grid'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'
import SideBar from '../SideBar/SideBar'
// import PrimaryButton from '../ShowProducts/ShowProducts'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { Divider, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Productsdata } from '../../Productsdata'
import Modal from '../../components/Modal/ModalComponent'
import ModalComponent from '../../components/Modal/ModalComponent'
import AddNewProduct from '../AddNewProduct/AddNewProduct'

const Products = () => {
    interface Product {
        title: string;
        quantity: number;
        price: number;
        id: number;


    }

    const [products, setProducts] = useState<any[]>(Productsdata)
    const [cartDetails, setCartDetails] = useState<Product[]>([]);
    const [open, setOpen] = useState<boolean>(false)

    const handleView=()=>{
            setOpen(!open)
    }

    const handleCart = () => {
        console.log("Clicked");
    }

    const handleAddtoCart = (title: string, price: number, id: number) => {
        const updatedCartDetails: Product[] = [
            ...cartDetails,
            {
                title: title,
                quantity: 1,
                price: price,
                id: id
            },
        ];
        setCartDetails(updatedCartDetails);
    };


    const handleAddNewProductData = (title: number, price: number, sizes: number) => {
        const updatedCartDetails = [
            {
                id: Math.round(Math.random() * 9999),
                title: title,
                price: price,
                sizes: sizes
            },
            ...products
        ];
        setProducts(updatedCartDetails);
        console.log(updatedCartDetails)

    }

    const handleFilterBySize = (size: string) => {
        console.log(size);

        const product = Productsdata.filter((products) => {
            return products.availableSizes.includes(size)
        });
        setProducts(product);
    }
    const deleteProduct = (id: number) => {
        const updatedCartDetails = cartDetails.filter(cart => cart.id !== id);
        setCartDetails(updatedCartDetails);
    }

    const ClearCart=()=>{
        setCartDetails([])
    }
    const ClearFilter = () => {
        setProducts(Productsdata);
    }
    return (
        <div>
            <Box
                sx={{ flexGrow: 1, position: "relative", left: "0px", marginTop: "10px" }}
                width="95%"
                height="600px"
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >

                    <Grid item xs={2}>
                        <SideBar handleFilterBySize={handleFilterBySize} ClearFilter={ClearFilter} cartDetails={cartDetails} setCartDetails={setCartDetails} deleteProduct={deleteProduct} />
                    </Grid>

                    <Grid item xs={10}>
                        <Grid container spacing={5}>
                            <Grid item xs={1}>
                                <Typography
                                    fontSize="25px"
                                    sx={{
                                        fontWeight: 'bold',
                                        width: "250px",
                                        marginLeft: "1px"
                                    }}
                                >
                                    {products.length} Product(s) found
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <PrimaryButton
                                    onClick={handleView}
                                    sx={{
                                        width: "120px",
                                        color: " white",
                                        backgroundColor: "black",
                                        marginLeft: "730px",
                                        fontWeight: 'bold',
                                        marginTop: "0px"
                                    }}
                                >
                                    Add Product
                                </PrimaryButton>
                            </Grid>
                            <Grid item xs={1}>
                                <PrimaryButton
                                    onClick={ClearCart}
                                    sx={{
                                        width: "100px",
                                        color: " white",
                                        backgroundColor: "black",
                                        marginLeft: "800px",
                                        fontWeight: 'bold',
                                        marginTop: "0.5px"
                                    }}
                                >
                                    Clear Cart
                                </PrimaryButton>

                            </Grid>
                        </Grid>

                        <Divider sx={{ marginTop: "6px", marginBottom: "1rem" }} />

                        <Grid
                            container spacing={1} >
                            {products.map((mydata, index) => {
                                return (
                                    <Grid
                                        key={index} item xs={3} >

                                        <Card variant="outlined" sx={{ height: "300px" }}>
                                            <CardContent>
                                                <PrimaryButton onClick={handleCart} sx={{

                                                    color: " white",
                                                    backgroundColor: "black",
                                                    marginLeft: "100px",
                                                    fontSize: "12px"
                                                }}>Free Shipping</PrimaryButton>


                                                <Typography variant="h5" sx={{ marginTop: "20px", fontSize: "15px" }} component="div">
                                                    {mydata.title}
                                                </Typography>
                                                <Divider variant='middle' color="yellow" sx={{ width: "40px", marginLeft: "7rem", marginTop: "1rem" }} />
                                                <Typography sx={{ mb: 1.5, size: 14, marginTop: "20px", fontSize: "15px" }} color="text.secondary">
                                                    ${mydata.price}
                                                </Typography>

                                            </CardContent>
                                            <CardActions>
                                                <PrimaryButton
                                                    onClick={() => handleAddtoCart(mydata.title, mydata.price, mydata.id)}
                                                    sx={{
                                                        width: "100px",
                                                        size: "small",
                                                        color: " white",
                                                        backgroundColor: "black",
                                                        marginTop: "30px",
                                                        fontSize: "12px",
                                                        marginLeft: "5rem",
                                                        position: "relative"
                                                    }}
                                                >Add to Cart</PrimaryButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            <ModalComponent
                Component={AddNewProduct}
                open={open}
                handleView={handleView}
                 handleAddNewProductData={handleAddNewProductData}/>
        </div>
    )
}

export default Products