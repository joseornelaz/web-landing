import Box from "@mui/material/Box"
import { Header } from "../../molecules/Header/Header"
import { Footer } from "../../molecules/Footer/Footer"
import { Outlet } from "react-router-dom"
import Container from "@mui/material/Container"
import Fab from "@mui/material/Fab"
import ScrollToTopFab from "../../molecules/ScrollToTopFab/ScrollToTopFab"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const MainTemplate: React.FC = () => {
    return(
        <Box 
            sx={{ 
                bgcolor: "background.default", 
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Header />
                <Container
                    sx={{
                        px: 3,
                        flex: 1,
                    }}
                >
                    <Outlet />
                </Container>
            <Footer />
            <Fab
                color="success"
                href="https://wa.me/1234567890"
                target="_blank"
                size="medium"
                sx={{ 
                    color: '#FFFFFF',
                    position: 'fixed',
                    bottom: 72,
                    right: 16,
                    }}
            >
                <WhatsAppIcon sx={{fontSize: '2.3rem'}} />
            </Fab>
            <ScrollToTopFab />
        </Box>
    )
}