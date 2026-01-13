import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "../../atoms/Typography/Typography";
import Grid from "@mui/material/Grid";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { asesoriaSchema, type AsesoriaFormData } from "../../../schemas/asesoriaSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button, useTheme } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { useAsesoria } from "../../../services/AsesoriaService";
import { TextMaskCustom } from "../../molecules/TextMask/TextMask";
import { useNotification } from "../../../provider/NotificationProvider";

const programas = [
  {id_programa: 1, value: 'Licenciatura'},
  {id_programa: 2, value: 'Maestria'},
  {id_programa: 1, value: 'Doctorado'},
];

export const HomeAsesoria: React.FC = () => {
    const theme = useTheme();
    const { showNotification } = useNotification();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaValido, setCaptchaValido] = useState(false);
    const [captcha, setCaptcha] = useState('');
    const [loading, setLoading] = React.useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<AsesoriaFormData>({
        resolver: zodResolver(asesoriaSchema(programas.map(p => p.id_programa)) ?? [0]),
        defaultValues: {
          nombreContacto: '',
          numEmpleadoContacto: '',
          emailContacto: '',
          numContacto: '',
          pragramaContacto: 0
        },
    });

    const onSubmit = async (data: AsesoriaFormData) => {
      if(captchaValido) {
        setLoading(true);        
        // console.log(recaptchaRef.current?.getValue());
        createMutation.mutate(data);
      }else{
        showNotification("Por favor de completar CAPTCHA", "warning");
      }
    };
  
    const createMutation = useMutation({
      mutationFn: useAsesoria,
      onSuccess: async (response) => {
        console.log(response);
        if(response.success) {
          showNotification(`La información se envió satisfactoriamente`, "success");
        }else{
          showNotification(`Hubo un error al enviar el formulario, intentar de nuevo`, "success");
        }
        setLoading(false);
        recaptchaRef.current?.reset();
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
            px: {xs: 0, md: '115px'}
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: theme.palette.secondary.main,
              minHeight: '550px',
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              // alignItems: { xs: "center", md: "flex-start" },
              // p: { xs: 3, md: 6 },
              // minHeight: { xs: "auto", sm: "30%", md: 482, lg: 585, xl: 585 },
              // position: "relative",

              px: {xs: '24px', md: '100px'},
              pt: '70px',
              pb: '100px'
            }}
          >
            <Typography component="h1" variant="h1" color="primary" sxProps={{mb: '33px'}}>Solicita asesoría</Typography>
            <Typography component="span" variant="body2" sxProps={{mb: '46px'}}>Recibe información detallada y seguimiento personalizado en tu proceso de inscripción, compártenos los siguientes datos y un asesor/a te contactará.</Typography>
            <Grid container spacing={4} rowSpacing={1}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="nombreContacto"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="nombre"
                            label="Nombre completo"
                            placeholder="Ingresa tu nombre completo"
                            error={!!errors.nombreContacto}
                            helperText={errors.nombreContacto?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="numEmpleadoContacto"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="matricula"
                            label="Número de colaborador/a"
                            placeholder="Ingresa Número de colaborador/a"
                            error={!!errors.numEmpleadoContacto}
                            helperText={errors.numEmpleadoContacto?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="emailContacto"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="correo"
                            label="Correo Eléctronico"
                            placeholder="Ingresar Correo Eléctronico"
                            error={!!errors.emailContacto}
                            helperText={errors.emailContacto?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="numContacto"
                    control={control}
                    render={({ field }) => (
                      <TextField
                            {...field}
                            id="telefono"
                            label="Número Télefónico"
                            placeholder="Ingresar Número Télefónico"
                            inputMode="numeric"
                            error={!!errors.numContacto}
                            helperText={errors.numContacto?.message}
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
                  name="pragramaContacto"
                  control={control}
                  render={({ field }) => (
                      <FormControl fullWidth error={!!errors.pragramaContacto}>
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
                                          {item.value}
                                      </MenuItem>
                                  ))
                              }
                          </Select>
                      </FormControl>
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
                <Button 
                  fullWidth 
                  color="primary" 
                  variant="contained" 
                  sx={{mt: 2}}
                  onClick={handleSubmit(onSubmit)}
                  loading={loading}
                  loadingPosition="end"
                >ENVIAR</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
}