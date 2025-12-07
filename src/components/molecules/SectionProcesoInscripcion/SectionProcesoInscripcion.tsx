import Grid from "@mui/material/Grid";
import { BackgroundContainer } from "../BackgroundContainer/BackgroundContainer";
import Box from "@mui/material/Box";

import { ProcesoInscripcion } from '../../../assets/icons';
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { DuracionCard } from "../DuracionCard/DuracionCard";
import { DescripcionPagina } from "../DescripcionPagina/DescripcionPagina";
import { Typography } from "../../atoms/Typography/Typography";
import { TimelineSteps } from "../TimelineSteps/TimelineSteps";

type SectionProcesoInscripcionProps = {
    item: {descripcion: string, info: {text: string, value: string}[], steps: any[] }
};

export const SectionProcesoInscripcion: React.FC<SectionProcesoInscripcionProps> = ({item}) => {
    return(
        <BackgroundContainer>
            <Grid container spacing={4}>
                <Grid 
                    size={{xs: 12, md: 4}}
                >
                    <Box mb={5}>
                        <ProcesoInscripcion />
                    </Box>
                    <Box mb={5}>
                        <TituloPagina>Proceso de<br />Inscripción</TituloPagina>
                        <DescripcionPagina>{item.descripcion}</DescripcionPagina>
                    </Box>
                    <Box mb={5}>
                        <DuracionCard>
                            <Box sx={{display: 'flex', flexDirection: 'column', pl: 3}}>
                                {
                                    item.info.map((item, index) => 
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
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <TimelineSteps steps={item.steps}/>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}