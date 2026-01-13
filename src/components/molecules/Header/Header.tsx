import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDown } from '@mui/icons-material';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton, useMediaQuery, useTheme } from "@mui/material";

import logo from '../../../assets/logo.png';

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NivelTypes } from "../../../types/NivelTypes";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
    const theme = useTheme();
    const { type } = useParams<{ type: string }>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);

    const handleNavigation = (route: string) => {
        navigate(route);
    }

    const isNivelPage = location.pathname.startsWith('/nivel/');
    const isDiplomadosPage = location.pathname.startsWith('/diplomado');

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Cambiar a fixed cuando el scroll supere los 120px
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
      
            {/* Navigation Bar */}

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
                                            <Button color="inherit" onClick={() => handleNavigation(`/nivel/${NivelTypes.LIC}`)}>Licenciaturas</Button>
                                            <Button color="inherit" onClick={() => handleNavigation(`/nivel/${NivelTypes.ING}`)}>Ingenierías</Button>
                                            <Button color="inherit" onClick={() => handleNavigation(`/nivel/${NivelTypes.MAESTRIA}`)}>Posgrados</Button>
                                            <Button color="inherit" onClick={() => handleNavigation(`/diplomado`)}>Diplomados</Button>
                                        </>
                                }
                                
                            </Box>
                            <IconButton color="inherit" sx={{ display: { md: "none" } }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}