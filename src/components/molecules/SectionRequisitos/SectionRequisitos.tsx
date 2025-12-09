import { BackgroundContainer } from "../BackgroundContainer/BackgroundContainer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { Check } from "../../../assets/icons";
import { Typography } from "../../atoms/Typography/Typography";

type SectionRequisitosProps = {
    item: {descripcion: string, imagen: string, requisitos: string[]};
}

export const SectionRequisitos: React.FC<SectionRequisitosProps> = ({item}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const puntoFomentar = () => {
        return item.requisitos.map((item, i) => <Box key={i} sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
            <Box component="img" src={Check} />
            <Typography variant="body1" component="span">{item}</Typography>
        </Box>)
    }
    
    return(
        <BackgroundContainer backgroundSide="left">
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ width: '100%', textAlign: 'center' }}
                    >
                        <Box
                            component="img"
                            src={item.imagen}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina>Requisitos:</TituloPagina>
                        <Typography variant="body1" component="p" sxProps={{mb: 4}}>
                            {item.descripcion}
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer> 
    );
}