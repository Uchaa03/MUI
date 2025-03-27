import React, {useState} from 'react'
import {Box, Drawer, IconButton, Link, List, ListItem, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoNav from "./LogoNav.jsx";

const MobileNav = () => {

    //State for control menu
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'none' }}}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                disableRipple //Disable Animation
                onClick={() => {setOpen(!open)}}
            >
                <MenuIcon
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: '#2464C8',
                        borderRadius: 1,
                        fontSize: {xs: '2rem', sm: '2.5rem'},
                    }}
                />
            </IconButton>
            {/* Sidebar with drawer */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => {setOpen(false)}}
            >
                <LogoNav/>

            </Drawer>
        </Box>
    )
}
export default MobileNav
