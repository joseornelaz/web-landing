import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDown } from '@mui/icons-material';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";

import logo from '../../../assets/logo.png';

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NivelTypes } from "../../../types/NivelTypes";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

export const Header: React.FC = () => {
    const theme = useTheme();
    const { type } = useParams<{ type: string }>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNavigation = (route: string) => {
        navigate(route);
        handleClose();
    }

    const isNivelPage = location.pathname.startsWith('/nivel/');
    const isDiplomadosPage = location.pathname.startsWith('/diplomado');

    const [anchorEl, setAnchorEl] = useState(null);
    const [menuAbierto, setMenuAbierto] = useState<string | null>(null);

    const botones = [
        { 
            id: 'lic', 
            etiqueta: 'Licenciaturas', 
            opciones: [
                { sub: 'En Gerenciamiento', path: `/nivel/${NivelTypes.LIC}` }
            ] 
        },
        { 
            id: 'ing', 
            etiqueta: 'Ingenierías', 
            opciones: [
                { sub: 'En Desarrollo de Software', path: `/nivel/${NivelTypes.ING}` }
            ] 
        },
        { 
            id: 'pos', 
            etiqueta: 'Posgrados', 
            opciones: [
                { sub: 'Maestría en Dirección de Negocios', path: `/nivel/${NivelTypes.MAESTRIA}` }
            ] 
        },
        { 
            id: 'dip', 
            etiqueta: 'Diplomados', 
            opciones: [
                { sub: 'Inteligencia Artificial, Liderazgo y Cultura Digital', path: `/${NivelTypes.DIPLOMADO}` }
            ] 
        },
    ];
      
    const handleOpen = (event: any, id: any) => {
        setAnchorEl(event.currentTarget);
        setMenuAbierto(id);
    };    
      
    const handleClose = () => {
        setAnchorEl(null);
        setMenuAbierto(null);
    };

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
        });
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const renderDrawerContent = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', backgroundColor: `${theme.palette.primary.main}` }}>
                <img src={logo} alt="logo" style={{ height: '40px' }} />
            </Box>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigation('/')}>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                </ListItem>
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigation(`/nivel/${NivelTypes.PREPA}`)}>
                        <ListItemText primary="Prepa Coppel" />
                    </ListItemButton>
                </ListItem>

                <Divider sx={{ my: 1 }} />
                
                {botones.map((boton) => (
                    <React.Fragment key={boton.id}>
                        <Typography variant="overline" sx={{ px: 2, fontWeight: 'bold', color: 'text.secondary' }}>
                            {boton.etiqueta}
                        </Typography>
                        {boton.opciones.map((opcion, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton onClick={() => handleNavigation(opcion.path)}>
                                    <ListItemText inset primary={opcion.sub} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if(!isMobile) {
                if(location.pathname.startsWith('/inscribirme')) return;

                if (scrollPosition > 120) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }            
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return(
        <>
            <Box sx={{ bgcolor: theme.palette.secondary.main, px: 2, py: 0.6 }}>
                <Container 
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                >
                    <Typography variant="caption">
                        Prepa Coppel: Inicio de Inscripciones (Fecha aquí) 2025
                    </Typography>
                    <Button
                        endIcon={<KeyboardArrowDown />}
                        sx={{
                            color: '#2962FF',
                            textTransform: 'none',
                            fontSize: '14px',
                            fontWeight: 500,
                            p:0
                        }}
                    >
                        Acceso a Campus Digital
                    </Button>
                </Container>
            </Box>
      
            <AppBar position={isFixed ? "fixed" : "static"} color="primary" elevation={0} 
                sx={{ display: 'flex', justifyContent: 'center', minHeight: 101, transition: 'all 0.3s ease-in-out' }} >
                <Container>
                    <Toolbar disableGutters sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '100px' }}>
                        <Box
                            component="img" 
                            src={logo}
                            sx={{ mr: 2 }}
                        />
                        <Box>
                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, fontSize: '16px' }}>
                                <Button color="inherit" onClick={() => handleNavigation('/')}>Inicio</Button>
                                {
                                    (isNivelPage || isDiplomadosPage) 
                                    ? 
                                        <>
                                            <Button color="inherit" onClick={() => scrollToSection('beneficios')}>Beneficios</Button>
                                            <Button color="inherit" onClick={() => scrollToSection('ficha-tecnica')}>Ficha Técnica</Button>
                                            <Button color="inherit" onClick={() => scrollToSection('requisitos')}>Requisitos</Button>
                                            <Button color="inherit" onClick={() => handleNavigation('/inscribirme/' + type)}>Quiero formar parte</Button>
                                        </>
                                    :
                                        <>
                                            <Button color="inherit" onClick={() => handleNavigation(`/nivel/${NivelTypes.PREPA}`)}>Prepa Coppel</Button>
                                            {
                                                botones.map((boton) => (
                                                <div
                                                    key={boton.id}
                                                    onMouseLeave={handleClose}
                                                    style={{ display: 'inline-block' }}
                                                >
                                                    <Button
                                                        color="inherit"
                                                        onMouseEnter={(e) => handleOpen(e, boton.id)}
                                                        endIcon={<KeyboardArrowDownIcon />}
                                                        sx={{ textTransform: 'none' }}
                                                    >
                                                        {boton.etiqueta}
                                                    </Button>

                                                    <Menu
                                                        id={`mouse-over-menu-${boton.id}`}
                                                        anchorEl={anchorEl}
                                                        open={menuAbierto === boton.id}
                                                        onClose={handleClose}
                                                        disableScrollLock={true}
                                                        disableRestoreFocus
                                                        slotProps={{
                                                            paper: {
                                                                onMouseEnter: () => setMenuAbierto(boton.id),
                                                                sx: { pointerEvents: 'auto' }
                                                            },
                                                            root: {
                                                                sx: { pointerEvents: 'none' } 
                                                            }
                                                        }}
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                                    >
                                                        {boton.opciones.map((opcion, i) => (
                                                            <MenuItem 
                                                                key={i} 
                                                                onClick={() => handleNavigation(opcion.path)}
                                                            >
                                                                {opcion.sub}
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                </div>
                                                ))
                                            }
                                        </>
                                }
                            </Box>
                            <IconButton color="inherit" sx={{ display: { md: "none" } }} onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { md: "none" } }}
            >
                {renderDrawerContent()}
            </Drawer>
        </>
    );
}