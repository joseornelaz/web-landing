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

type SectionMainProps = {
    item: {logoPrograma: any, imagenPrograma: any, descripcion: string, duracion: {text: string, value: string}[]};
}

export const SectionMain: React.FC<SectionMainProps> = ({ item }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const betweenDevice = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
    return(
        <BackgroundContainer>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 5 }} 
                    sx={[
                        isMobile && { order: 2 },
                        betweenDevice && { order: 2 },
                    ]}
                >
                    <Box component="img" src={item.logoPrograma} mb={5} />
                    <Box mb={5}>
                        <TituloPagina>Objetivo del<br />Programa</TituloPagina>
                        <DescripcionPagina>{item.descripcion}</DescripcionPagina>
                    </Box>
                    <Box mb={5}>
                        <DuracionCard>
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
                        </DuracionCard>
                    </Box>
                    <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Quiero Inscribirme</Button>
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
                        <Box component="img" src={item.imagenPrograma} sx={{width: {xs: '100%'}}} />
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}