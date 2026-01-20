import { Box, Button, Grid, useTheme } from "@mui/material";
import { FlexColumn, FlexRow } from "../../../styles/styles";
import { SectionAzul } from "../SectionAzul/SectionAzul";
import { Typography } from "../../atoms/Typography/Typography";

import { FichaTecnica, PlanEstudios } from '../../../assets/icons';

type SectionFichaTecnicaProps = {
    handleVerMasFT?: () => void;
    handleDescargarFT?: () => void;
    handleVerMasPE?: () => void;
    handleDescargarPE?: () => void;
}

const icons = [{id: 'FichaTecnica', icon: <FichaTecnica />}, {id: 'PlanEstudio', icon: <PlanEstudios />}];

export const SectionFichaTecnica: React.FC<SectionFichaTecnicaProps> = (props) => {
    const theme = useTheme();
    
    const handleVerMasFichaTecnica = () => {
        if (props.handleVerMasFT) {
            return props.handleVerMasFT();
        }
    }

    const handleDescargarFichaTecnica = () => {
        if (props.handleDescargarFT) {
            return props.handleDescargarFT();
        }
    }

    const handleVerMasPlanEstudios = () => {
        if (props.handleVerMasPE) {
            return props.handleVerMasPE();
        }
    }

    const handleDescargarPlanEstudios = () => {
        if (props.handleDescargarPE) {
            return props.handleDescargarPE();
        }
    }

    const buttons = (type: string) => (
        <Box sx={{...FlexColumn, gap: '16px'}}>
            <Button 
                variant="contained" 
                color="secondary" 
                sx={{ color: theme.palette.primary.main}} 
                onClick={type === 'FichaTecnica' ? handleVerMasFichaTecnica : handleVerMasPlanEstudios}
            >Ver más</Button>
            <Button 
                variant="outlined" 
                sx={{borderColor: '#FFF', color: '#FFF'}} 
                onClick={type === 'FichaTecnica' ? handleDescargarFichaTecnica : handleDescargarPlanEstudios}
            >Descargar</Button>
        </Box>
    );

    const ficha = (item: any) => (
        <Box sx={{...FlexRow, gap: '50px'}}>
            <Box>
                {item.icon}
            </Box>
            {buttons(item.id)}
        </Box>
    )

    return(
        <SectionAzul>
            <Box sx={{...FlexColumn, gap: '18px', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h1" component="h1" sxProps={{color: '#FFFFFF'}}>Ficha Técnica y Plan de Estudios</Typography>
                <Typography variant="body2" component="span" sxProps={{color: '#FFFFFF'}}>Conoce a detalle tu plan de estudios y datos técnicos de tu programa académico</Typography>
                <Grid container spacing={6} sx={{width: '100%', mt: 5}}>
                    {
                        icons && icons.map((item, i) => (
                            <Grid size={{xs:12, md:6}} key={i}>
                                <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    {ficha(item)}
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            
        </SectionAzul>
    );
}