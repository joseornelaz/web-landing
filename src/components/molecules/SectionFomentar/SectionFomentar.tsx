import Grid from "@mui/material/Grid";
import { BackgroundContainer } from "../BackgroundContainer/BackgroundContainer";
import Box from "@mui/material/Box";
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "../../atoms/Typography/Typography";
import { Check } from "../../../assets/icons";

type SectionFomentarProps = {
    title: any;
    image: any;
    puntos: string[];
}

export const SectionFomentar: React.FC<SectionFomentarProps> = ({ title, image, puntos }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const puntoFomentar = () => {
        return puntos.map((item, i) => <Box key={i} sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
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
                            src={image}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina>{title}</TituloPagina>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}