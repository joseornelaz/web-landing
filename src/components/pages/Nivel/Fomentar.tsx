import React from 'react';
import Prepa2 from '../../../assets/prepa/prepa2.png';
import FomentarLic from '../../../assets/licenciatura/fomentar.png';
import FomentarIng from '../../../assets/ingenieria/inge02.png';
import FomentarMaestria from '../../../assets/maestria/maestria02.png';
import type { NivelInterface } from '../../../types/NivelInterface';
import { NivelTypes } from '../../../types/NivelTypes';
import { SectionFomentar } from "../../molecules/SectionFomentar/SectionFomentar";

const FomentarArray = [
    {
        type: NivelTypes.PREPA,
        values: {
            puntos: ['Trabajo en equipo y colaborativo.', 'Aprendizaje autónomo.', 'Comunicación efectiva.', 'Pensamiento crítico y reflexivo.', 'Participación responsable en la sociedad.', 'Organización y gestión del tiempo.'],
            title: "Prepa Coppel fomentará en ti:",
            image: Prepa2
        }
    },
    {
        type: NivelTypes.LIC,
        values: {
            puntos: ['Lograr un gerenciamiento acorde a las necesidades del mercado.','Crecer de la mano con la transformación tecnológica.','Desarrollar competencias académicas específicas en administración y finanzas.','Implementar sistemas de liderazgo y trabajo en equipo efectivos.','Trabajar con enfoque en el cliente.','Solucionar problemas complejos de manera eficaz y creativa.'],
            title: "Un egresado de la LEG será capaz de:",
            image: FomentarLic
        }
    },
    {
        type: NivelTypes.ING,
        values: {
            puntos: ['Fomentar la transformación digital de su organización.','Promover soluciones innovadoras disruptivas y factibles.','Diseñar y desarrollar software seguro.','Gestionar innovación en fábricas de software.','Analizar y visualizar conocimiento organizacional.','Planear e implementar infraestructura tecnológica.','Aprender y adaptarse rápidamente a nuevas tecnologías y tendencias.'],
            title: "Un egresado de la IDS será capaz de:",
            image: FomentarIng
        }
    },
    {
        type: NivelTypes.MAESTRIA,
        values: {
            puntos: ['Desarrollar un liderazgo ejecutivo y efectivo.','Comprender la planificación financiera.','Será especialista en la detección de oportunidades de negocios.','Desarrollar un aprofunda visión corporativa.','Estar inmerso en el desarrollo tecnológico.','Aprender cómo coordinar y dirigir equipos multidisciplinarios'],
            title: "Un egresado de Maestría será capaz de:",
            image: FomentarMaestria
        }
    },
]

export const Fomentar: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = React.useState<any>(null);

    React.useEffect(() => {
        setInfo(FomentarArray.find(item => item.type.toLowerCase() === type?.toLowerCase())?.values || {});
    },[type]);

    return(
        info && <SectionFomentar
            title={info.title}
            image={info.image}
            puntos={info.puntos}
        />
    );
}