import Grid from "@mui/material/Grid";
import { BackgroundContainer } from "../BackgroundContainer/BackgroundContainer";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { DescripcionPagina } from "../DescripcionPagina/DescripcionPagina";
import { DuracionCard } from "../DuracionCard/DuracionCard";
import { Typography } from "../../atoms/Typography/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BotonSesionesInformativas } from "../BotonSesionesInformativas/BotonSesionesInformativas";

type SectionMainProps = {
    item: {logoPrograma: any, imagenPrograma: any, descripcion: string, duracion: {text: string, value: string}[]};
    hasLogoText?: boolean;
    isHome?: boolean;
    type: string | undefined;
}

export const SectionMain: React.FC<SectionMainProps> = ({ item, hasLogoText = false, isHome = false, type }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const betweenDevice = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
    const handleInscribirme = () => {
        navigate('/inscribirme/' + type);
    }

    return(
        <BackgroundContainer>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 5 }} 
                    sx={[
                        isMobile && { order: 2 },
                        betweenDevice && { order: 2 },
                    ]}
                >
                    {
                        !isHome && (
                            hasLogoText ? 
                                <Typography variant="h3" component="h3" color="primary" sxProps={{mb:5}}>{item.logoPrograma}</Typography> 
                            : 
                                <Box component="img" src={item.logoPrograma} mb={5} />
                            )
                    }
                    <Box mb={5}
                        sx={[
                            isHome && { mt: 5 }
                        ] }
                    >
                        {
                            !isHome 
                            ? <TituloPagina>Objetivo del<br />Programa</TituloPagina>
                            : <TituloPagina>Tu educación<br />es tu futuro</TituloPagina>
                        }
                        <DescripcionPagina>{item.descripcion}</DescripcionPagina>
                    </Box>
                    <Box mb={5}>
                        {
                            isHome && 
                            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                                <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Programas Académicos</Button>
                                <BotonSesionesInformativas />
                            </Box>
                        }
                        <DuracionCard>
                            {
                                !isHome 
                                ?
                                    <Box sx={{display: 'flex', flexDirection: 'column', pl: 3}}>
                                        {
                                            item.duracion.map((item, index) => 
                                                <Box display='flex' key={index}>
                                                    <Typography variant="body2" component="span" color="primary">
                                                        {item.text}<Typography variant="body2" component="span" sxProps={{ml:1}}>{item.value}</Typography>
                                                    </Typography>
                                                </Box>
                                            )
                                        }
                                    </Box>
                                :
                                    <Typography variant="h3" component="h3" color="primary" sxProps={{pl: 3}}>
                                        ¡Tu aprendizaje de hoy,
                                        <br />
                                        es tu éxito de mañana!
                                    </Typography>
                            }
                        </DuracionCard>
                    </Box>
                    {
                        !isHome && <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}} onClick={handleInscribirme}>Quiero Inscribirme</Button>
                    }
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}
                    sx={[
                        isMobile && { order: 1 },
                        betweenDevice && { order: 1 }
                    ]}
                >
                    {
                        !isHome
                        ?
                            <Box 
                                sx={{ 
                                    width: '100%',
                                    textAlign: { xs: 'center', md: 'right'}
                                }}
                            >
                                <Box component="img" src={item.imagenPrograma} sx={{width: {xs: type === 'diplomado' ? '90%' : '100%'}}} />
                            </Box>
                        :
                         <Box 
                            sx={{ 
                                width: '100%',
                                textAlign: { xs: 'center', md: 'right'}
                            }}
                        >
                        {
                            isMobile 
                            ? 
                                <Box component="img" src={item.imagenPrograma} sx={{ width: '100%'}} />
                                :
                                    <Box 
                                        component="img" 
                                        src={item.imagenPrograma} 
                                        sx={[
                                            {
                                                width: { xs: '70%', md: 'auto'}
                                            }
                                        ]}
                                    />
                            }
                        </Box>           
                    }
                    
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}