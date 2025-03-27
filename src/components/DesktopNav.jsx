import React from 'react'
import HeroButton from "./HeroButton.jsx";
import {Box} from "@mui/material";

const DesktopNav = () => {
    return (
        <Box sx={{display: { xs: 'none', sm: 'none', md: 'flex' }}}>
            <HeroButton>Inicio</HeroButton>
            <HeroButton>Equipo</HeroButton>
            <HeroButton>Visitanos</HeroButton>
            {/* Overwrite Styles for different style in Contact*/}
            <HeroButton
                sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#2464C8',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                Contáctanos
            </HeroButton>
        </Box>    )
}
export default DesktopNav
