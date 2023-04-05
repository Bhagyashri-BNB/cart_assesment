import React, { FC } from 'react'
import {Modal, Fade, IconButton } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useTheme } from "@mui/material";


export interface modalprops{
    open: boolean,
    handleView: ()=>void,
    handleAddNewProductData: (title: string, price: number, size: string)=> void,
    Component: any
}

const ModalComponent = (modalprops: any) => {
  const theme = useTheme()
  return (
    <Modal

      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalprops.open}
      onClose={modalprops.handleView}
      closeAfterTransition
    
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalprops.open}>
        <div style = {{marginLeft : '450px', marginTop : '100px', backgroundColor : 'white' , width : 'min-content'}}>
            sdfdsf
        <IconButton
            size="small"
            onClick={modalprops.handleView}
            sx={{
              position: "relative",
              top: "1.8rem",
              marginLeft: "85px",
              marginTop: "1px",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderRadius: "0.5rem",
            }}
          >
            <CloseSharpIcon />
          </IconButton>

          <modalprops.Component open={modalprops.open} handleView={modalprops.handleView} handleAddNewProductData={modalprops.handleAddNewProductData}  />
        </div>
      </Fade>
    </Modal>)
}

export default ModalComponent
