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

const programas = [
  {id_programa: 1, value: 'Licenciatura'},
  {id_programa: 2, value: 'Maestria'},
  {id_programa: 1, value: 'Doctorado'},
];

export const FormInscribirme: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { control, formState: { errors } } = useForm<InscribirmeFormData>({
        resolver: zodResolver(inscribirmeSchema(programas.map(p => p.id_programa)) ?? [0]),
        defaultValues: {
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            id_programa: 0
        },
    });

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
                    name="apellido"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="apellido"
                            label="Apellidos"
                            placeholder="Ingresa tus apellidos"
                            error={!!errors.apellido}
                            helperText={errors.apellido?.message}
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
              <Grid size={{ xs: 12, md: 12 }}>
                <Controller
                    name="mensaje"
                    control={control}
                    render={({ field }) => (
                      <TextField
                            {...field}
                            id="mensaje"
                            label="Mensaje"
                            placeholder="Ingresar Mensaje"
                            error={!!errors.mensaje}
                            helperText={errors.mensaje?.message}
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
                  sx={{height: '70px', width: '100%', border: '1px solid', mt: 1}}
                />
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
                            <Button color="primary" fullWidth variant="contained">Enviar Mensaje</Button>
                        :
                            <Button color="primary" variant="outlined">Enviar Mensaje</Button>
                    }
                </Box>
              </Grid>
            </Grid>
        </Box>
    );
}