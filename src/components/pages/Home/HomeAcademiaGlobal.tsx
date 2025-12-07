import Box from "@mui/material/Box"
import { Typography } from "../../atoms/Typography/Typography"
import bg2 from '../../../assets/bg2.png';
import LogoAG from '../../../assets/logo_ag.png';

export const HomeAcademiaGlobal: React.FC = () => {
    return(
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                py: { xs: 6, md: 8 },
                mt: '28px',
                minHeight: { xs: '600px', md: '550px' },
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                "::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center left",
                    opacity: 1,
                    zIndex: -1,
                    transition: "all .3s ease",
                    top: '-105px'
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: { xs: '90%', sm: '750px', md: '929px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyItems: 'center',
                    textAlign: 'center',
                    gap: { xs: '20px', md: '24px' },
                    // px: { xs: 2, sm: 4, md: '29px' },
                    // py: { xs: 3, md: '29px' }
                }}
            >
                {/* Logo */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 1,
                        mt: ''
                    }}
                >
                    <Box component="img" src={LogoAG} sx={{ 
                         width: '100%',
                            maxWidth: '372px',
                            height: 'auto'
                    }}/>
                </Box>

                {/* Subtítulo azul */}
                <Box 
                    sx={{
                        maxWidth: { xs: '100%', md: '552px' },
                        mt: '30px'
                    }}
                >
                    <Typography 
                        variant="h3" 
                        component="h3" 
                        color="primary" 
                        sxProps={{
                            fontSize: { xs: '18px', sm: '20px', md: '24px' },
                            fontWeight: 500,
                            lineHeight: 1.4
                        }}
                    >
                        Estudia en la Coppel Universidad Corporativa a través de Academia Global
                    </Typography>
                </Box>

                {/* Título principal */}
                <Typography 
                    variant="h1" 
                    component="h1"
                    sxProps={{
                        fontSize: { xs: '28px', sm: '36px', md: '42px' },
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: '#343A40',
                        maxWidth: '900px'
                    }}
                >
                    Aliados expertos en crear instituciones orientadas al desarrollo de competencias
                </Typography>

                {/* Párrafo descriptivo */}
                <Typography 
                    variant="body1" 
                    component="p"
                    sxProps={{
                        fontSize: { xs: '14px', sm: '15px', md: '16px' },
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: '#343A40',
                        maxWidth: '900px'
                    }}
                >
                    Academia Global crea Universidades Corporativas para la Formación Directiva, Gerencial y Operativa con temática relacionada al liderazgo, calidad, servicio, ejecución, alta dirección, toma de decisiones, trabajo en equipo, innovación, inteligencia emocional, comunicación, entre otras temas de capacitación, a través de modelos virtuales, mixtos y presenciales.
                </Typography>
            </Box>
        </Box>
    )
}