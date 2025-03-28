import React, { useState } from 'react';
import {Box, Drawer, IconButton, Link, List, ListItem, ListItemButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoNav from "./LogoNav.jsx";

const MobileNav = () => {
    // Estado para controlar el menú
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                disableRipple // Desactiva la animación
                onClick={() => { setOpen(!open) }}
            >
                <MenuIcon
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: '#2464C8',
                        borderRadius: 1,
                        fontSize: { xs: '2rem', sm: '2.5rem' },
                    }}
                />
            </IconButton>
            {/* Sidebar con Drawer */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <Box sx={{ marginTop: '2rem', paddingLeft: '1rem' }}>
                    <LogoNav />
                </Box>
                <List sx={{ width: 250 }}>
                    {["Inicio", "Equipo", "Visitanos", "Contacto"].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => setOpen(false)}>
                                <Link
                                    href={`#${text.toLowerCase()}`}
                                    style={{
                                        textDecoration: "none",
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 'bold',
                                        color: "#2464C8",
                                        width: "100%",
                                        display: "block",
                                        padding: "8px 16px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {text}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default MobileNav;
