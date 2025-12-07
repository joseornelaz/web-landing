import {  
  Box,
  Button,
  Grid,  
  useMediaQuery,  
  useTheme,
} from "@mui/material";
import bg from '../../../assets/bg.png';
import Group1 from '../../../assets/home/group_movil.png';
import Group2 from '../../../assets/home/group_desktop.png';
import { Typography } from "../../atoms/Typography/Typography";

const HomeMain: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const betweenDevice = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return(
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                py: 6,
                minHeight: '710px',
                "::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    opacity: 1,
                    zIndex: -1,
                    transition: "all .3s ease",
                    // MOBILE
                    [theme.breakpoints.down("sm")]: {
                        opacity: 0.20,
                        backgroundPosition: "right", // o "right", ajusta como te guste
                    },

                    // TABLET
                    [theme.breakpoints.between("sm", "md")]: {
                        opacity: 0.30,
                        backgroundPosition: "center",
                    },
                },
            }}
        >
          <Grid container spacing={4} alignItems="center" >
            <Grid size={{ xs: 12, md: 5 }} 
                sx={[
                    isMobile && { order: 2 },
                    betweenDevice && { order: 2 },
                ]}>
              <Box sx={{ maxWidth: 560 }}>
                <Typography variant="h1" component="h1" color="primary" sxProps={{mb: '28px'}}>
                  Tu educación
                  <br />
                  es tu futuro
                </Typography>

                <Typography variant="body1" component="span" sxProps={{ mt: 3 }}>
                  Grupo Coppel en conjunto con nuestro socio académico, estamos convencidos que a través de la educación formal podemos transformar el futuro de las personas y sus familias, es por ello que hemos creado para ti los Programas Académicos de Coppel Universidad Corporativa que a través de un modelo andragógico será el mejor medio para que desarrolles las competencias y habilidades que permitan desempeñar con éxito tus actividades laborales y ser una mejor persona en todos los ámbitos de tu vida.
                </Typography>

                <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                  <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Programas Académicos</Button>
                  <Button variant="outlined">Sesiones Informativas</Button>
                </Box>

                <Box sx={{ 
                    mt: 6, 
                    borderLeft: `6px solid ${theme.palette.primary.main}`, 
                    height: '82px',
                    display:'flex',
                    alignItems: 'center'
                }}>
                  <Typography variant="h3" component="h3" color="primary" sxProps={{pl: 3}}>
                    ¡Tu aprendizaje de hoy,
                    <br />
                    es tu éxito de mañana!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}
                sx={[
                    isMobile && { order: 1 },
                    betweenDevice && { order: 1 }
                ]}
            >
                <Box 
                    sx={{ 
                        width: '100%',
                        textAlign: { xs: 'center', md: 'right'}
                    }}
                >
                {
                    isMobile 
                    ? 
                        <Box component="img" src={Group1} sx={{ width: '100%'}} />
                        :
                            <Box 
                                component="img" 
                                src={Group2} 
                                sx={[
                                    {
                                        width: { xs: '70%', md: 'auto'}
                                    }
                                ]}
                            />
                    }
                </Box>
            </Grid>
            {/* <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Box sx={{ width: '100%', height: '100%'}}>
                   <Box 
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '500px'
                        }}
                   >
                        <Box
                            component="img"
                            src={home1}
                            alt=""
                            sx={{
                                position: 'absolute',
                                top: '-15px',
                                left: '78px'
                            }}                            
                        /> 
                        <Box
                            component="img"
                            src={home2}
                            alt=""
                            sx={{
                                position: 'absolute',
                                top: '40px',
                                right: '20px',
                                zIndex: 3
                            }}
                        />
                        <Box
                            component="img"
                            src={home3}
                            alt=""
                            sx={{
                                position: 'absolute',
                                top: '323px',
                                left: '45px'
                            }}
                        />
                   </Box>
                   
                </Box>  
            </Grid> */}
          </Grid>
        </Box>
        

    );
}

export default HomeMain;