import React from 'react';
import Prepa from '../../../assets/prepa/prepa1.png';
import LogoPrepa from '../../../assets/prepa/logo-prepa.png';

import Licenciatura from '../../../assets/licenciatura/licenciatura.png';
import LogoLic from '../../../assets/licenciatura/logo-lic.png';

import Ingenieria from '../../../assets/ingenieria/inge01.png';
import LogoIng from '../../../assets/ingenieria/logo.png';

import LogoMaestria from '../../../assets/maestria/maestria_logo.png';
import Maestria from '../../../assets/maestria/maestria01.png';

import { SectionMain } from "../../molecules/SectionMain/SectionMain";
import type { NivelInterface } from '../../../types/NivelInterface';
import { NivelTypes } from '../../../types/NivelTypes';
import Box from '@mui/material/Box';

const NivelArray = [
    {
        nivel: NivelTypes.PREPA,
        values: {
            logoPrograma: LogoPrepa,
            imagenPrograma: Prepa,
            descripcion: 'Bachillerato orientado a la formación para el trabajo, donde el/la estudiante desarrollará competencias específicas a través de la resolución de problemas reales desde una perspectiva crítica e integral, potenciando sus habilidades y aprendizajes para desempeñarse con éxito en su vida profesional y personal.',
            duracion: [
                {text: 'Duración del programa:', value: '2 años.'},
                {text: 'Carga de materias:', value: '2 máximo por mes.'},
                {text: 'RVOE ante la SEP:', value: 'BACH. 002-18/25PBH0189T.'},
            ]
        }
    },
    {
        nivel: NivelTypes.LIC,
        values:{ 
            logoPrograma: LogoLic,
            imagenPrograma: Licenciatura,
            descripcion: 'Programa académico que desarrolla habilidades clave para una organización: liderazgo, comunicación, agilidad, ventas, comportamiento del consumidor y gestión de equipos de trabajo con enfoque en resultados. Además, promueve el fortalecimiento del criterio gerencial para la toma de decisiones en ambientes de transformación digital.',
            duracion: [
                {text: 'Duración del programa:', value: '3 años 8 meses.'},
                {text: 'Carga de materias:', value: '2 máximo por mes.'},
                {text: 'RVOE ante la SEP:', value: 'L.002- 2022/ 25PSU0127A.'},
            ]
        }
    },
    {
        nivel: NivelTypes.ING,
        values:{ 
            logoPrograma: LogoIng,
            imagenPrograma: Ingenieria,
            descripcion: 'Programa académico que desarrolla habilidades clave para una organización: liderazgo, comunicación, agilidad, ventas, comportamiento del consumidor y gestión de equipos de trabajo con enfoque en resultados. Además, promueve el fortalecimiento del criterio gerencial para la toma de decisiones en ambientes de transformación digital.',
            duracion: [
                {text: 'Duración del programa:', value: '3 años 8 meses.'},
                {text: 'Carga de materias:', value: '2 máximo por mes.'},
                {text: 'RVOE ante la SEP:', value: 'L.002- 2022/ 25PSU0127A.'},
            ]
        }
    },
    {
        nivel: NivelTypes.MAESTRIA,
        values:{ 
            logoPrograma: LogoMaestria,
            imagenPrograma: Maestria,
            descripcion: 'El programa de Maestría en Dirección de Negocios, ofrece herramientas y sistemas necesarios para fomentar en los alumnos/as una cultura de innovación con una metodología enfocada en el fortalecimiento del análisis de casos de negocios y la aplicación de lo aprendido en la vida profesional.',
            duracion: [
                {text: 'Duración del programa:', value: '2 años.'},
                {text: 'Carga de materias:', value: '1 materia cada 5 semanas, conforme a calendario.'},
                {text: 'RVOE ante la SEP:', value: 'M.025-18/ 25MSU0067C.'},
            ]
        }
    },
];

export const Main: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = React.useState<any>(null);

    React.useEffect(() => {
        setInfo(NivelArray.find(nivelItem => nivelItem.nivel.toLowerCase() === type?.toLowerCase())?.values || {});
    },[type]);

    return(
        info && 
            <Box 
                sx={{
                    minHeight: { xs: 'auto', md: 'calc(100vh - 200px)' },
                    mt: { xs: 0, md: '30px' },
                }}
            >
                <SectionMain item={info} type={type} />
            </Box>
    )
}