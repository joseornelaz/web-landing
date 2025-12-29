import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import backgroundImage from "../../../assets/inscribirme.png";
import { FormInscribirme } from "./Formulario";
import { useMediaQuery, useTheme } from "@mui/material";

const Inscribirme: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const Formulario = () => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pt: !isMobile ? '60px' : '0px',
                pb: isMobile ? '20px' : '0px'
            }}
        >
            <FormInscribirme />
        </Box>
    )

    return(
        !isMobile ?
            <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 6}}>
                    <Box
                    sx={{
                        width: '100%',
                        // height: { xs: '300px', md: '100%' },
                        height: '100vh', // 100% del viewport height
                        minHeight: '710px', // mínimo 710px
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        objectFit: 'cover'
                    }}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    {
                        Formulario()
                    }
                </Grid>
            </Grid>
        :
            Formulario()
    );
}

export default Inscribirme;