import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDown } from '@mui/icons-material';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, IconButton, Link, useTheme } from "@mui/material";

import logo from '../../../assets/logo.png';

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
    const theme = useTheme();    
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
    }

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

            <AppBar position="static" color="primary" elevation={0} sx={{ display: 'flex', justifyContent: 'center', minHeight: 101 }} >
                <Container>
                    <Toolbar disableGutters sx={{display: 'flex', alignItems: 'center', justifyContent: {xs:'space-between', md: 'center'}, gap: '100px' }}>
                        <Box
                            component="img" 
                            src={logo}
                            sx={{ mr: 2 }}
                        />
                        <Box>
                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, fontSize: '16px' }}>
                                <Button color="inherit" onClick={() => handleNavigation('/prepa')}>Inicio</Button>
                                <Button color="inherit">Prepa Coppel</Button>
                                <Button color="inherit">Licenciaturas</Button>
                                <Button color="inherit">Ingenierías</Button>
                                <Button color="inherit">Posgrados</Button>
                                <Button color="inherit">Diplomados</Button>
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