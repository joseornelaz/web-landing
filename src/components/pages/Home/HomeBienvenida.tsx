import Box from "@mui/material/Box"

import bg2 from '../../../assets/bg2.png';
import imgHomeBienvenida from '../../../assets/home/home_bienvenida.png';


import Grid from "@mui/material/Grid";
import { Typography } from "../../atoms/Typography/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

export const HomeBienvenida: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                pb: 6,
                minHeight: '550px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',                
                "::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                    opacity: 1,
                    zIndex: -1,
                    transition: "all .3s ease",
                    // MOBILE
                    // [theme.breakpoints.down("sm")]: {
                    //     opacity: 0.20,
                    //     backgroundPosition: "right", // o "right", ajusta como te guste
                    // },

                    // // TABLET
                    // [theme.breakpoints.between("sm", "md")]: {
                    //     opacity: 0.30,
                    //     backgroundPosition: "center",
                    // },
                },
            }}
        >
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ width: '100%', textAlign: 'center' }}
                    >
                        <Box
                            component="img"
                            src={imgHomeBienvenida}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                    
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <Typography variant="h1" component="h1" color="primary" sxProps={{mb: '13px'}}>
                            Te damos la
                            <br />
                            Bienvenida
                        </Typography>
        
                        <Typography variant="body2" component="span">
                            En Coppel Universidad Corporativa nos sentimos muy orgullosos de formar parte de tu desarrollo profesional a través de nuestros programas académicos que cuentan con reconocimiento de validez oficial de estudios por la Secretaría de Educación Pública a través de AG College y la Universidad México Internacional.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}