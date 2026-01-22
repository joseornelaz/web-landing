import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDown } from '@mui/icons-material';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import logo from '../../../assets/logo.png';

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NivelTypes } from "../../../types/NivelTypes";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MENU_ACCESOS, MENU_HEADER } from "../../../types/ProgramasType";

export const Header: React.FC = () => {
    const theme = useTheme();
    const { type } = useParams<{ type: string }>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const MenuAccesos = MENU_ACCESOS;
    const botones = MENU_HEADER;

    const handleNavigation = (route: string) => {
        navigate(route);
        handleClose();
        setDrawerOpen(false);
    }

    const isNivelPage = location.pathname.startsWith('/nivel/');
    const isDiplomadosPage = location.pathname.startsWith('/diplomado');

    const [anchorEl, setAnchorEl] = useState(null);
    const [menuAbierto, setMenuAbierto] = useState<string | null>(null);

    const [menuAccesoAnchorEl, setMenuAccessoAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenuAcceso = Boolean(menuAccesoAnchorEl);
    
    const handleClickMenuAcceso = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAccessoAnchorEl(event.currentTarget);
    };
    
    const handleCloseMenuAcceso = () => {
        setMenuAccessoAnchorEl(null);
    };

    const goToExternal = (path: string) => {
        handleCloseMenuAcceso();
        window.open(path, '_SELF');
    }
      
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
        if(!open) handleClose();
    };

    const renderDrawerContent = () => (
        <Box
            sx={{ 
                width: 250, 
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                height: '100%'
            }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ 
                p: 2, 
                display: 'flex', 
                justifyContent: 'flex-end'
            }}>
                <IconButton 
                    onClick={toggleDrawer(false)}
                    sx={{ color: 'white' }}
                >
                    <CancelOutlinedIcon sx={{ fontSize: "32px" }}  />
                </IconButton>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigation('/')}>
                        <ListItemText primary="Inicio" sx={{textAlign: 'right'}} />
                    </ListItemButton>
                </ListItem>
                
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigation(`/nivel/${NivelTypes.PREPA}`)}>
                        <ListItemText primary="Prepa Coppel" sx={{textAlign: 'right'}} />
                    </ListItemButton>
                </ListItem>
                {
                    botones.map((boton) => (
                        <ListItem disablePadding key={`item_lst_${boton.id}`}>
                            <ListItemButton>
                                <ListItemText inset sx={{textAlign: 'right'}}>
                                    <div
                                        key={`item_${boton.id}`}
                                        onMouseLeave={handleClose}
                                        style={{ display: 'inline-block' }}
                                    >
                                        <Button
                                            color="inherit"
                                            onMouseEnter={(e) => handleOpen(e, `item_${boton.id}`)}
                                            endIcon={menuAbierto === `item_${boton.id}` ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            sx={{ textTransform: 'none' }}
                                        >
                                            {boton.etiqueta}
                                        </Button>

                                        <Menu
                                            id={`mouse-over-menu-${boton.id}`}
                                            anchorEl={anchorEl}
                                            open={menuAbierto === `item_${boton.id}`}
                                            onClose={handleClose}
                                            disableScrollLock={true}
                                            disableRestoreFocus
                                            slotProps={{
                                                paper: {
                                                    onMouseEnter: () => setMenuAbierto(`item_${boton.id}`),
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
                                                    <Typography component="span" dangerouslySetInnerHTML={{ __html: opcion.sub }} />
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                                        
                           

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
                    sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}
                >
                    {/* <Typography variant="caption">
                        Prepa Coppel: Inicio de Inscripciones (Fecha aquí) 2025
                    </Typography> */}
                    <Button
                        endIcon={<KeyboardArrowDown />}
                        sx={{
                            color: '#2962FF',
                            textTransform: 'none',
                            fontSize: '14px',
                            fontWeight: 500,
                            p:0
                        }}
                        onClick={handleClickMenuAcceso}
                    >
                        Acceso a Campus Digital
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={menuAccesoAnchorEl}
                        open={openMenuAcceso}
                        onClose={handleCloseMenuAcceso}
                        disableScrollLock={true}
                        slotProps={{
                          list: {
                            'aria-labelledby': 'basic-button',
                          },
                        }}
                    >
                        {
                            MenuAccesos && MenuAccesos.map((item, index) => 
                                <MenuItem 
                                    key={index}
                                    onClick={() => goToExternal(item.path)}
                                >
                                    <Typography component="span" dangerouslySetInnerHTML={{ __html: item.label }} />
                                </MenuItem>
                            )
                        }
                    </Menu>
                </Container>
            </Box>
      
            <AppBar position={isFixed ? "fixed" : "static"} color="primary" elevation={0} 
                sx={{ display: 'flex', justifyContent: 'center', minHeight: 101, transition: 'all 0.3s ease-in-out' }} >
                <Container>
                    <Toolbar disableGutters sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '100px' }}>
                        <Box
                            component="img" 
                            src={logo}
                            sx={{ mr: 2, cursor: 'pointer' }}
                            onClick={() => handleNavigation('/')}
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
                                                        endIcon={menuAbierto === boton.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
                                                                <Typography component="span" dangerouslySetInnerHTML={{ __html: opcion.sub }} />
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
                disableScrollLock={true}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ 
                    display: { md: "none" },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                    }
                }}
            >
                {renderDrawerContent()}
            </Drawer>
        </>
    );
}