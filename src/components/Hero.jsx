import React from 'react'
import {AppBar, Toolbar} from "@mui/material";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import LogoNav from "./LogoNav.jsx";

const Hero = () => {
    return (
        //Create a navbar
        <AppBar
            component="header"
            position="fixed"
            sx={{ // sx for apply styles
                px: { xs: 2, sm: 3, md: 10 } , //xs for phone; sm for tablet; md for desktop
                backgroundColor: '#2464C8',
            }}
        >
            <Toolbar component="nav"
                     sx={{display: 'flex',
                         justifyContent: 'space-between',
                         height: { xs: 70, sm: 80, md: 100 },
                     }}

            >
                <LogoNav/>
                {/* Box for Desktop */}
                <DesktopNav component="nav"/>
                {/* Box for SmartPhone */}
                <MobileNav component="nav"/>
            </Toolbar>
        </AppBar>
    )
}
export default Hero
