import { Box, Button, Grid, useTheme } from "@mui/material";
import { FlexColumn, FlexRow } from "../../../styles/styles";
import { SectionAzul } from "../SectionAzul/SectionAzul";
import { Typography } from "../../atoms/Typography/Typography";

import { FichaTecnica, PlanEstudios } from '../../../assets/icons';

type SectionFichaTecnicaProps = {
    type: 'prepa' | 'leg';
}

const FichaArray = [
    {type: 'prepa', icons: [{icon: <FichaTecnica />}, {icon: <PlanEstudios />}]}
];

export const SectionFichaTecnica: React.FC<SectionFichaTecnicaProps> = ({type}) => {
    const theme = useTheme();
    const Ficha = FichaArray.find((item) => item.type === type);
    
    const buttons = () => (
        <Box sx={{...FlexColumn, gap: '16px'}}>
            <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Ver más</Button>
            <Button variant="outlined" sx={{borderColor: '#FFF', color: '#FFF'}}>Descargar</Button>
        </Box>
    );

    const ficha = (ficha: any) => (
        <Box sx={{...FlexRow, gap: '50px'}}>
            <Box>
                {ficha}
            </Box>
            {buttons()}
        </Box>
    )

    return(
        <SectionAzul>
            <Box sx={{...FlexColumn, gap: '18px', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h1" component="h1" sxProps={{color: '#FFFFFF'}}>Ficha Técnica y Plan de Estudios</Typography>
                <Typography variant="body2" component="span" sxProps={{color: '#FFFFFF'}}>Conoce a detalle tu plan de estudios y datos técnicos de tu programa académico</Typography>
                <Grid container spacing={6} sx={{width: '100%', mt: 5}}>
                    {
                        Ficha && Ficha.icons.map((item, i) => (
                            <Grid size={{xs:12, md:6}} key={i}>
                                <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    {ficha(item.icon)}
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            
        </SectionAzul>
    );
}