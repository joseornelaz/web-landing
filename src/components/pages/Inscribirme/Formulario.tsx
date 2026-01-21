import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "../../atoms/Typography/Typography";
import Grid from "@mui/material/Grid";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { inscribirmeSchema, type InscribirmeFormData } from "../../../schemas/inscribirmeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery, useTheme } from "@mui/material";
import { PROGRAMAS_ACADEMICOS_SELECT } from "../../../types/ProgramasType";
import { useNotification } from "../../../provider/NotificationProvider";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { useContacto } from "../../../services/AsesoriaService";
import { TextMaskCustom } from "../../molecules/TextMask/TextMask";

const programas = PROGRAMAS_ACADEMICOS_SELECT;

export const FormInscribirme: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { showNotification } = useNotification();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaValido, setCaptchaValido] = useState(false);
    const [captcha, setCaptcha] = useState('');
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors }, reset } = useForm<InscribirmeFormData>({
        resolver: zodResolver(inscribirmeSchema(programas.map(p => p.id_programa)) ?? [0]),
        defaultValues: {
            nombreQuiero: '',
            apellidosQuiero: '',
            correoQuiero: '',
            numQuiero: '',
            id_programa: 0,
            comentariosQuiero: ''
        },
    });

    const onSubmit: any = async (data: InscribirmeFormData) => {
        if(captchaValido) {
          setLoading(true);        
          // console.log(recaptchaRef.current?.getValue());
          createMutation.mutate({...data, dirQuiero: 'dir', recaptchaResponse: recaptchaRef.current?.getValue()});
        }else{
          showNotification("Por favor de completar CAPTCHA", "warning");
        }
    };

    const createMutation = useMutation({
        mutationFn: useContacto,
        onSuccess: async (response) => {
          console.log(response);
          if(response.data.success) {
            showNotification(`La información se envió satisfactoriamente`, "success");
          }else{
            showNotification(`Hubo un error al enviar el formulario, intentar de nuevo`, "error");
          }
          setLoading(false);
          recaptchaRef.current?.reset();
          reset();
        },
        onError: (error) => {
          showNotification(`Error al enviar: ${error.message}`, "error");
          setLoading(false);
        },
        onSettled: () => {
          console.log('La mutación ha finalizado');
        }
      });
  
      const onCaptchaChange = () => {
          setCaptchaValido(true);
      };
  
      useEffect(() => {
        setTimeout(() => setCaptcha(import.meta.env.VITE_APP_CAPTCHA), 200);
      },[]);

    return(
        <Box 
          sx={{ 
            width: '100%', 
            pt: {xs: '30px', md: '60px'}
          }}
        >
            <Typography component="h2" variant="h2" color="primary" 
                sxProps={[
                    { mb: '33px', fontSize: { xs: '2rem', md: '32px' }},
                    isMobile && {textAlign: 'center'}
                ]}
            >¡Quiero empezar mi transformación!</Typography>
            <Typography component="span" variant="body2" sxProps={{mb: '46px'}}>Nuestros asesores te contactarán para resolver todas tus dudas y acompañarte en tu proceso de inscripción a cualquiera de nuestros Programas Académicos.</Typography>
            <Grid container spacing={4} rowSpacing={1} sx={{mt: '36px'}}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="nombreQuiero"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="nombre"
                            label="Nombre completo"
                            placeholder="Ingresa tu nombre completo"
                            error={!!errors.nombreQuiero}
                            helperText={errors.nombreQuiero?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="apellidosQuiero"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="apellido"
                            label="Apellidos"
                            placeholder="Ingresa tus apellidos"
                            error={!!errors.apellidosQuiero}
                            helperText={errors.apellidosQuiero?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="correoQuiero"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="correo"
                            label="Correo Eléctronico"
                            placeholder="Ingresar Correo Eléctronico"
                            error={!!errors.correoQuiero}
                            helperText={errors.correoQuiero?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="numQuiero"
                    control={control}
                    render={({ field }) => (
                      <TextField
                            {...field}
                            id="telefono"
                            label="Número Télefónico"
                            placeholder="Ingresar Número Télefónico"
                            error={!!errors.numQuiero}
                            helperText={errors.numQuiero?.message}
                            fullWidth
                            slotProps={{
                              input: {
                                inputComponent: TextMaskCustom as any,
                              },
                            }}
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Controller
                  name="id_programa"
                  control={control}
                  render={({ field }) => (
                      <FormControl fullWidth error={!!errors.id_programa}>
                          <InputLabel id="asunto-label">Selecciona un programa de interés</InputLabel>
                          <Select
                              labelId="asunto-label"
                              label="Selecciona un programa de interés"
                              {...field}
                              value={field.value || ''}
                              // disabled={isLoading}
                          >
                              {
                                  programas && programas.map((item, i) => (
                                      <MenuItem key={i} value={item.id_programa}>
                                          {item.label}
                                      </MenuItem>
                                  ))
                              }
                          </Select>
                      </FormControl>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Controller
                    name="comentariosQuiero"
                    control={control}
                    render={({ field }) => (
                      <TextField
                            {...field}
                            id="mensaje"
                            label="Mensaje"
                            placeholder="Ingresar Mensaje"
                            error={!!errors.comentariosQuiero}
                            helperText={errors.comentariosQuiero?.message}
                            fullWidth
                            multiline
                            rows={4}
                            sx={{mt: 2}}
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{height: '70px', width: '100%', mt: 2}}
                >
                  {
                    captcha && <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={captcha}
                      onChange={onCaptchaChange}
                    />
                  }
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Box
                    sx={[
                        {width: '100%', textAlign: 'right'},
                        isMobile && { pt: 2 }
                    ]}
                >
                    {
                        isMobile 
                        ? 
                            <Button 
                                color="primary" 
                                fullWidth 
                                variant="contained"
                                onClick={handleSubmit(onSubmit)}
                                loading={loading}
                                loadingPosition="end"
                            >Enviar Mensaje</Button>
                        :
                            <Button 
                                color="primary" 
                                variant="outlined"
                                onClick={handleSubmit(onSubmit)}
                                loading={loading}
                                loadingPosition="end"
                            >Enviar Mensaje</Button>
                    }
                </Box>
              </Grid>
            </Grid>
        </Box>
    );
}