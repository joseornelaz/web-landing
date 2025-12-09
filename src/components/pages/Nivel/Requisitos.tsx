import type { NivelInterface } from "../../../types/NivelInterface";
import { NivelTypes } from "../../../types/NivelTypes";
import { SectionRequisitos } from "../../molecules/SectionRequisitos/SectionRequisitos";
import PrepaRequisitos from '../../../assets/prepaRequisitos.png';
import LicRequisitos from '../../../assets/licenciatura/requisitos-lic.png';
import IngRequisitos from '../../../assets/ingenieria/inge_requisitos.png';
import MaestriaRequisitos from '../../../assets/maestria/maestria_requisitos.png';
import { useState } from "react";
import React from "react";

const requisitosData = [
    {
        type: NivelTypes.PREPA,
        values: {
            descripcion: 'Todo un grupo de personal operativo y académico se encuentra involucrado en Prepa Coppel para ofrecerte estudios de bachillerato de alta calidad académica, flexible y que te ayudará a cursar tus estudios de preparatoria en tus propios tiempos y bajo la disponibilidad e interés que tú mismo decidas dedicarle.',
            imagen: PrepaRequisitos,
            requisitos: ['Tener una antigüedad mínima de 3 meses como Colaborador Coppel y 1 año de antigüedad para familiares directos.','Acta de nacimiento original.','Certificado de secundaria original.','Certificado Parcial de estudios (en caso de revalidación o equivalencia).','Llenar ficha de preinscripción con asesoramiento del equipo de admisión.','CURP']
        }
    },
    {
        type: NivelTypes.LIC,
        values: {
            descripcion: 'Todo un grupo de personal operativo y académico se encuentra involucrado en la Licenciatura en Gerenciamiento para ofrecerte estudios de grado de alta calidad académica, flexible y que te ayudará a cursar tus estudios de Licenciatura en tus propios tiempos y bajo la disponibilidad e interés que tú mismo decidas dedicarle.',
            imagen: LicRequisitos,
            requisitos: ['Tener una antigüedad mínima de 3 meses como Colaborador Coppel y 1 año de antigüedad para familiares directos. (cónyuge e hijos).', 'Acta de nacimiento original.','Certificado de preparatoria original y legalizado.','Certificado Parcial de estudios (en caso de revalidación o equivalencia).','CURP.','Carta de autenticidad emitida por tu institución de origen.','Llenar ficha de preinscripción con asesoramiento del equipo de admisión.']
        }
    },
    {
        type: NivelTypes.ING,
        values: {
            descripcion: 'Todo un grupo de personal operativo y académico se encuentra involucrado en la Ingeniería en Desarrollo de Software para ofrecerte estudios de grado de alta calidad académica, flexible y que te ayudará a cursar tus estudios de Ingeniería en tus propios tiempos y bajo la disponibilidad e interés que tú mismo decidas dedicarle.',
            imagen: IngRequisitos,
            requisitos: ['Tener una antigüedad mínima de 3 meses como Colaborador Coppel y 1 año de antigüedad para familiares directos.','Acta de nacimiento original.','Certificado de preparatoria original y legalizado.','Certificado Parcial de estudios (en caso de revalidación o equivalencia).','CURP.','Carta de autenticidad emitida por su institución de origen.','Llenar ficha de preinscripción con asesoramiento del equipo de admisión.']
        }
    },
    {
        type: NivelTypes.MAESTRIA,
        values: {
            descripcion: 'Todo un grupo de personal operativo y académico se encuentra involucrado en Maestría en Dirección de Negocios para ofrecerte estudios de posgrado de alta calidad académica, flexible y que te ayudará a cursar tus estudios de Maestría en tus propios tiempos y bajo la disponibilidad e interés que tú mismo decidas dedicarle.',
            imagen: MaestriaRequisitos,
            requisitos: ['Acta de nacimiento original.','Título profesional original y legalizado o Carta de institución de origen aceptando modalidad de titulación por Grado Académico Posgrado.','Copia cédula profesional (opcional).','Certificado Parcial de estudios (en caso de revalidación o equivalencia).','CURP.','Llenar ficha de preinscripción con asesoramiento del equipo de admisión.']
        }
    }
]

export const Requisitos: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = useState<{descripcion: string, imagen: string, requisitos: string[]} | undefined>(undefined);

    React.useEffect(() => {
        setInfo(requisitosData.find(item => item.type === type)?.values || undefined);
    }, [type]);

    return(
        info && <SectionRequisitos item={info} />
    );
}