import React from 'react'
import {Button} from "@mui/material";

const HeroButton = ({children, sx}) => {
    return (
        <Button
            color="inherit"
            sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginLeft: '2rem',
                borderRadius: '0.5rem',
                ...sx //Overwrite styles in components
            }}
        >
            {children}
        </Button>
    )
}
export default HeroButton
