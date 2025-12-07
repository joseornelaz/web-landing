import Box from "@mui/material/Box";
import { TimelineSteps } from "../../molecules/TimelineSteps/TimelineSteps";

import Grid from "@mui/material/Grid";
import { BackgroundContainer } from "../../molecules/BackgroundContainer/BackgroundContainer";
import { useMediaQuery, useTheme } from "@mui/material";
import { TituloPagina } from "../../molecules/TituloPagina/TituloPagina";
import { ProcesoInscripcion } from '../../../assets/icons';
import { DescripcionPagina } from "../../molecules/DescripcionPagina/DescripcionPagina";
import { DuracionCard } from "../../molecules/DuracionCard/DuracionCard";
import { Typography } from "../../atoms/Typography/Typography";

export const PrepaTimeline: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const betweenDevice = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const steps: any[] = [
    {
      number: '01.',
      title: 'Escanea',
      description: 'Tus documentos por ambos lados, a color y en formato PDF',
    },
    {
      number: '02.',
      title: 'Envía',
      description: 'Tus documentos por correo electrónico o por WhatsApp',
    },
    {
      number: '03.',
      title: 'Llena el formulario',
      description: 'Electrónico de admisión con todos tus datos',
    },
    {
      number: '04.',
      title: 'Recibe Confirmación',
      description: 'Una vez inscrito recibirás un correo eléctronico y un mensaje de WhatsApp.',
    },
    {
      number: '05.',
      title: 'Inducción',
      description: 'Recibe la plática de inducción para iniciar tus estudios. Un asesor de atención a alumnos te contactará del 01 al 10 del mes posterior a tu inscripción para brindarte tus credenciales.',
    },
    {
      number: '06.',
      title: 'Inicia Estudios',
      description: 'Con tus credenciales asignadas, entra en tu Campus Digital y accede a tus primeras dos materias.',
    },
  ];

  const duracionArray = [
        {text: 'Correo:', value: 'bachillerato@academiaglobal.mx'},
        {text: 'Whatsapp:', value: '(55) 3902 6308'},
    ];


    return(
        <BackgroundContainer>
            <Grid container spacing={4}>
                <Grid 
                    size={{xs: 12, md: 4}}
                    // sx={[
                    //     isMobile && { order: 2 },
                    //     betweenDevice && { order: 2 },
                    // ]}
                >
                    <Box mb={5}>
                        <ProcesoInscripcion />
                    </Box>
                    <Box mb={5}>
                        <TituloPagina>Proceso de<br />Inscripción</TituloPagina>
                        <DescripcionPagina>Los expedientes electrónicos se recibirán del 1 al 25 de cada mes. De esta manera, podrás iniciar tus estudios en el periodo próximo.</DescripcionPagina>
                    </Box>
                    <Box mb={5}>
                        <DuracionCard>
                            <Box sx={{display: 'flex', flexDirection: 'column', pl: 3}}>
                                {
                                    duracionArray.map((item, index) => 
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
                    <TimelineSteps steps={steps}/>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}