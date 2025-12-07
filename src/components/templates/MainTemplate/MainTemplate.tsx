import Box from "@mui/material/Box"
import { Header } from "../../molecules/Header/Header"
import { Footer } from "../../molecules/Footer/Footer"
import { Outlet } from "react-router-dom"
import Container from "@mui/material/Container"

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
        </Box>
    )
}