import React from "react";
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

const programas = [
  {id_programa: 1, value: 'Licenciatura'},
  {id_programa: 2, value: 'Maestria'},
  {id_programa: 1, value: 'Doctorado'},
];

export const HomeAsesoria: React.FC = () => {
    const theme = useTheme();

    const { control, handleSubmit, formState: { errors, isValid }, reset } = useForm<AsesoriaFormData>({
        resolver: zodResolver(asesoriaSchema(programas.map(p => p.id_programa)) ?? [0]),
        defaultValues: {
          nombre: '',
          matricula: '',
          correo: '',
          telefono: '',
          id_programa: 0
        },
    });

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
                    name="nombre"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="nombre"
                            label="Nombre completo"
                            placeholder="Ingresa tu nombre completo"
                            error={!!errors.nombre}
                            helperText={errors.nombre?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="matricula"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="matricula"
                            label="Número de colaborador/a"
                            placeholder="Ingresa Número de colaborador/a"
                            error={!!errors.matricula}
                            helperText={errors.matricula?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="correo"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="correo"
                            label="Correo Eléctronico"
                            placeholder="Ingresar Correo Eléctronico"
                            error={!!errors.correo}
                            helperText={errors.correo?.message}
                            fullWidth
                        />
                    )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="telefono"
                    control={control}
                    render={({ field }) => (
                      <TextField
                            {...field}
                            id="telefono"
                            label="Número Télefónico"
                            placeholder="Ingresar Número Télefónico"
                            error={!!errors.telefono}
                            helperText={errors.telefono?.message}
                            fullWidth
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
                  sx={{height: '70px', width: '100%', border: '1px solid', mt: 2}}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Button fullWidth color="primary" variant="contained" sx={{mt: 2}}>ENVIAR</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
}