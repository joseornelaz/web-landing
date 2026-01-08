import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FlexColumn, FlexRow } from "../../../styles/styles";
import { Typography } from "../../atoms/Typography/Typography";
import { Button, useTheme } from "@mui/material";
import { AccordionPreguntas } from "../../molecules/AccordionPreguntas/AccordionPreguntas";

const preguntas = [
        {
            pregunta: '¿Quién puede inscribirse en los Programas Académicos de UCC?',
            respuesta: 'Esta prestación, es para los Colaboradores de todas las unidades de negocio que conforman Grupo Coppel a nivel nacional y sus familiares directos (Cónyuge e hijos).',
        },
        {
            pregunta: '¿Existe alguna beca por parte de Grupo Coppel?',
            respuesta: 'Por supuesto que sí, se dan becas del 50 % en colegiaturas para colaboradores activos y sus familiares directos: cónyuge e hijos.',
        },
        {
            pregunta: '¿Mi beca del 50% qué gastos cubre?',
            respuesta: 'La beca cubre la mitad de tu Inscripción, anualidad, materia y/o mensualidad durante el periodo ideal de cursamiento, si excedes este tiempo deberás pagar al 100%.<br><br>Los gastos que corren por tu cuenta son: libros, cursos especiales, uniformes, exámenes, cuotas, materiales, recargos, así como facturas por cursos de arte, cultura de belleza, manualidades, cursos propedéuticos, exámenes de admisión, gastos de titulación y tesis, diplomados, seminarios, especialidades, carreras técnicas, etc.',
        },
        {
            pregunta: '¿Hacen revalidación o equivalencia de otras universidades?',
            respuesta: `Claro que sí, en el caso de las equivalencias debes entregar tu certificado parcial o incompleto de estudios original. El Departamento de Registro y Control Escolar revisará y validará aquellas materias que procedan en equivalencia.<br><br>
            En caso de revalidación de estudios, el interesado deberá presentar la resolución de revalidación de estudios emitido por la SEP acompañada del documento de certificación que sirvió de antecedente para la emisión del dictamen.<br><br>
            Los acuerdos de revalidación y equivalencia de estudios parciales son expedidos por la Autoridad Educativa.`
        },
        {
            pregunta: '¿Cómo sé quién es mi ERH local?',
            respuesta: 'Puedes consultar con el departamento de Recursos Humanos de tu unidad de negocio o revisar el directorio interno de la empresa.',
        },
        
        {
            pregunta: '¿Desde qué dispositivo puedo acceder al Campus Digital?',
            respuesta: 'Podrás ingresar desde cualquier dispositivo móvil, tableta, laptop o computadora.',
        },
        {
            pregunta: '¿Cuántas materias puedo cargar en un mes?',
            respuesta: 'Puedes cargar máximo 2 materias',
        },
        {
            pregunta: '¿Si no termino las 2 materias por mes, ¿qué pasa?',
            respuesta: 'Retrasas el tiempo de conclusión y certificación de tu programa.',
        },
        {
            pregunta: 'Si tengo dudas en alguna materia, ¿con quién me puedo comunicar?',
            respuesta: 'Comunícate con un asesor técnico vía Campus Digital o telefónicamente al Centro de Atención y Servicio a Alumnos al 667 712 4172 y 667 715 0051.',
        },
        {
            pregunta: '¿Cuál es la calificación mínima para aprobar un examen?',
            respuesta: `La calificación mínima aprobatoria es de 6 para los programas de Preparatoria, Licenciatura en Gerenciamiento e Ingeniería Industrial.<br><br>
            En el caso de la Maestría en Dirección de Negocios, la calificación mínima aprobatoria es de 8.5.`,
        },
        {
            pregunta: '¿Puedo concluir mi programa educativo antes del periodo ideal de cursamiento?',
            respuesta: 'Sí es posible, pero el certificado final de estudios solo se emitirá una vez que se cumpla el periodo correspondiente a la duración del programa.',
        },
        {
            pregunta: 'Ya terminé todas mis materias, ¿qué debo hacer?',
            respuesta: `Comunícate al 667 715 0050 para pedir información de la fecha en la que será emitido tu certificado.<br><br>
            Una vez acreditado el total de materias, un asesor se comunicará contigo para indicarte los pasos a seguir para recibir tu certificado final o de terminación de estudios.<br><br>
            Para recibir tu documento debes cubrir el pago de los derechos del mismo<br><br>Recuerda que los trámites se realizan cada cuatro meses.`,
        },
        {
            pregunta: '¿Hacen ceremonias de graduación?',
            respuesta: 'Claro que sí, una vez que termines tus estudios se te indica cuándo se llevaría a cabo tu ceremonia de graduación en donde podrás invitar a tus familiares y Líderes, actualmente se realiza en formato virtual.',
        },
        {
            pregunta: '¿Cómo me doy de baja si ya no quiero estudiar un programa académico?',
            respuesta: `<div>
            <p>Contamos con 2 medios oficiales:</p>
            
            <h3>● Por Asistencia TI:</h3>
            
            <p>Si el colaborador solicita su baja o bien su familiar, en cualquiera de los 2 casos el colaborador deberá levantar un ticket en Asistencia TI en el link: <em>https://asistenciati.coppel.com/</em> en la ruta: Quiero pedir algo > Talento y Desarrollo > Universidad Corporativa - Baja de Programas Académicos > Baja de Programas Académicos (Prepa Coppel, Licenciatura, Maestría).</p>
            
            <h3>● Por correo electrónico:</h3>
            
            <p>El alumno interesado deberá enviar un correo electrónico a programasacademicos@Coppel.com con la solicitud.</p>
            
            <p>En ambos medios (ticket o correo electrónico) deberá tener como requisito los siguientes datos:</p>
            
            <ul>
              <li>Indicar que es una baja del programa</li>
              <li>Número de colaborador</li>
              <li>Nombre completo del estudiante</li>
              <li>Programa educativo</li>
              <li>Motivo de la baja</li>
            </ul>
          </div>`,
        },
        {
            pregunta: '¿Si me doy de baja del programa , ¿qué pasa con las materias que cursé?',
            respuesta: 'Puedes tramitar un certificado parcial de estudios, el cual te servirá para poder continuar en otra institución o bien en otra entidad educativa del país.',
        },
        {
            pregunta: '¿Puedo continuar mis estudios si me di de baja en la empresa?',
            respuesta: 'Sí es posible, podrás continuar con tu cursamiento directamente con AG College o bien con la Universidad México Internacional. En el momento que eres baja de la empresa, automáticamente pierdes el beneficio del 50% de descuento en tus estudios, pero podrás contar un costo preferencial en el programa que estés cursando.',
        },
        {
            pregunta: '¿Cuándo me regresan mis documentos originales y dónde los puedo recoger?',
            respuesta: `Una vez finalizadas todas tus materias del plan de estudio y realizados los trámites correspondientes a la certificación y titulación te enviaremos tu documentación oficial con el área de Recursos Humanos de tu empresa.<br><br>
            En caso de requerir tus documentos originales por algún período de tiempo puedes solicitarlo con los Asesores de atención, te podremos enviar los documentos lo antes posible, pero recuerda que al finalizar con tus trámites es necesario volver a enviarnos los documentos para continuar con tus trámites.<br><br>
            Utilizamos esta información constantemente para la actualización de tu información con las Autoridades Educativas.`,
        },
        {
            pregunta: '¿A quién puedo contactar si tengo dudas?',
            respuesta: `Temas relacionados con Bajas, beca del 50% en Programa académicos, Información general de los programas, pagos y sugerencias.<br><br>
            Favor de contactarnos al siguiente correo programasacademicos@coppel.com<br><br>
            Temas relacionados con Admisión o bien con temas relacionados con Servicios Escolares favor de comunicarte al 667 715 0050.`,
        },
    ];

const Preguntas: React.FC = () => {
    const theme = useTheme();

    return(
        <Box sx={{pt: 4 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{...FlexColumn}}>
                        <Typography variant="h2" component="h2" color="primary" sxProps={{mb: '18px'}}>
                            Preguntas Generales
                        </Typography>
                        <Typography variant="body1" component="span" sxProps={{mb: '37px'}}>
                            A continuación encontrarás las respuestas a las preguntas más comunes para que puedas tomar una decisión. Con gusto te atenderemos si deseas iniciar tu Proceso de inscripción o si requieres Contacta a un asesor para aclarar más dudas.
                        </Typography>
                        <Box sx={{...FlexRow, gap: 2}}>
                            <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main }}>Proceso de inscripción</Button>
                            <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main }}>Contacta a un Asesor/a</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{...FlexColumn}}>
                        {/* <AccordionPreguntas /> */}
                        {preguntas.map((item, index) => (
                            <AccordionPreguntas 
                                key={index}
                                pregunta={item.pregunta}
                                respuesta={item.respuesta}
                            />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Preguntas;