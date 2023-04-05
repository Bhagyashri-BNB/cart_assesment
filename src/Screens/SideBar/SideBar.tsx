import * as React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Divider from '@mui/material/Divider';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Fab from "@mui/material/Fab"
import AddCartTotal from "../AddCartTotal/AddCartTotal";
import { useState } from "react";

interface Props {
    handleFilterBySize: (size: string) => void,
    ClearFilter: () => void,
    cartDetails:any,
    // setCartDetails: React.Dispatch<React.SetStateAction<any>>;
    setCartDetails: any,
    deleteProduct:(id: number)=>void
  }

  const SidebarItem: React.FC<Props> = ({ cartDetails,setCartDetails, handleFilterBySize, ClearFilter , deleteProduct}) => {
  const theme = useTheme();

  return (
    <>
      <Box padding="1rem"
        height="100x"
        width="200px"
      >
        <Grid container spacing={5}>
          <Grid item xs={1} >
            <Typography sx={{ marginTop: "0px", fontWeight: 'bold', fontSize: "20px" }}>Sizes</Typography>

          </Grid>
          <Grid item xs={1}>
            <PrimaryButton
              onClick={ClearFilter}
              sx={{
                width: "110px", size: "small", color: " white", backgroundColor: "black", fontSize: "12px", marginLeft: "2rem", position: "relative"
              }}
            >Clear Filter</PrimaryButton></Grid>
        </Grid>

        <Divider sx={{ marginTop: "6px", marginBottom: "1rem" }} />
        <Box >

          <Fab size="small" onClick={() => { handleFilterBySize('XS') }} sx={{ margin: "3px", color: "black" }} >XS</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('S') }} sx={{ margin: "3px", color: "black" }}> S</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('M') }} sx={{ margin: "3px", color: "black" }}>M</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('ML') }} sx={{ margin: "3px", color: "black" }}>ML</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('L') }} sx={{ margin: "3px", color: "black" }}>L</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('XL') }} sx={{ margin: "3px", color: "black" }}>XL</Fab>
          <Fab size="small" onClick={() => { handleFilterBySize('XXL') }} sx={{ margin: "3px", color: "black" }}>XXL</Fab>

        </Box>

        <Divider sx={{ marginTop: "30px" }} />
        <AddCartTotal cartDetails={cartDetails} setCartDetails={setCartDetails}   deleteProduct={deleteProduct}/>
      </Box>
    </>
  );
};

export default SidebarItem;
