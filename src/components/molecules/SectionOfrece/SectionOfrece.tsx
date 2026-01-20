import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { Typography } from "../../atoms/Typography/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { FlexColumn, FlexRow } from "../../../styles/styles";
import { useNavigate } from "react-router-dom";

type SectionOfreceProps = {
    content: { title: string; cards: string[]; imagen: any; };
    type: string | undefined;
}

export const SectionOfrece: React.FC<SectionOfreceProps> = ({ content, type }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleInscribirme = () => {
        navigate('/inscribirme/' + type);
    }

    const cards = () => (
        content?.cards.map((text: string, i: number) => 
            (
                <Box
                    key={i}
                    sx={[
                        {
                            p: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '50px',
                            minHeight: '120px',
                            maxWidth: '561px',
                            borderRadius: '7px',
                            boxShadow: '0px 3px 6px #00000029'
                        },
                        isMobile && { p: 0, pr: '10px', pl: '10px', gap: '24px' }
                    ]}
                >
                    <ArrowForwardIcon sx={{fontSize: '40px', color: '#05297A'}} />
                    <Typography variant="body1" component="span">{text}</Typography>
                </Box>
            )
        )
    )

    return(
        <Grid container spacing={4}>
            <Grid size={{ xs:12, md:7 }}>
                <Box sx={{
                    ...FlexColumn, 
                    justifyContent: 'center', 
                    height: '100%', 
                    
                }}>
                    <TituloPagina>{content?.title}</TituloPagina>
                    <Box sx={{
                        ...FlexColumn, 
                        gap: '20px',
                        overflowY: !isMobile ? 'hidden' : 'auto', 
                        overflowX: 'hidden',
                        minHeight: 350, 
                        maxHeight: 450, 
                        py: 2,
                        px: 1,
                        width: !isMobile ? '86%' : '100%',
                        '&:hover': {
                            overflowY: 'auto', 
                        }
                    }}>
                        { cards() }
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs:12, md:5 }}>
                <Box sx={{...FlexColumn}}>
                    <Box component="img" src={content?.imagen} />
                    <Box sx={{...FlexRow, gap: '10px'}}>
                        <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}} onClick={handleInscribirme}>Estoy Interesado/a</Button>
                        <Button variant="outlined">Sesiones Informativas</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}