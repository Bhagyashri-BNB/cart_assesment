
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';


interface PrimaryButtonProps {
    children : any,
  onClick: (e?: any)=> void ;
  fullWidth?: boolean;
  sx?: Object;
  type?: any;
  
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
    children,
    onClick,
    fullWidth = false,
    type,
    sx,
    ...rest
  }) => {
    const theme = useTheme();
    return (
      
        <Button
          type={type}
          fullWidth={fullWidth}
          sx={{
            ...sx,fontSize: '12px', '&.defaultButton': 
            
            {
              background: theme.palette.primary.main,
              color: theme.palette.primary.light,
            },
          }}
          
        
          onClick={onClick}
          
          {...rest}
        >
         {children}
        </Button>
     
    );
  };
  export default PrimaryButton;
  